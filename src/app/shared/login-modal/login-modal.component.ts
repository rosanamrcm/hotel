import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {

  @Output() onClose = new EventEmitter<void>();

  isOpen = false;
  isLogin = true;

  email = '';
  password = '';
  name = '';

  errors: any = {};
  firebaseError: string = '';

  isLoading = false;

  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.modalService.openLogin$.subscribe(() => {
      this.resetForm();
      this.isOpen = true;
    });
  }

  open() {
    this.isOpen = true;
  }

  resetForm() {
    this.email = '';
    this.password = '';
    this.name = '';

    this.errors = {};
    this.firebaseError = '';
  }

  close() {
    this.isOpen = false;
    this.resetForm(); 
    this.onClose.emit();
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.resetForm(); 
  }


  validate() {
    this.errors = {};
    this.firebaseError = '';

    if (!this.isLogin && !this.name) {
      this.errors.name = 'Name is required';
    }

    if (!this.email) {
      this.errors.email = 'Email is required';
    }

    if (!this.password) {
      this.errors.password = 'Password is required';
    }

    return Object.keys(this.errors).length === 0;
  }

  getFirebaseError(code: string): string {
    switch (code) {
      case 'auth/user-not-found':
        return 'User not found';

      case 'auth/wrong-password':
        return 'Invalid password';

      case 'auth/email-already-in-use':
        return 'Email already registered';

      case 'auth/invalid-email':
        return 'Invalid email';

      case 'auth/weak-password':
        return 'Password must be at least 6 characters';

      case 'auth/invalid-credential':
        return 'Invalid email or password';

      default:
        return 'Something went wrong. Try again';
    }
  }
  async submit() {
    this.firebaseError = ''; // limpa erro anterior
    this.isLoading = true;

    try {
      if (this.isLogin) {
        await this.authService.login(this.email, this.password);
      } else {
        await this.authService.register(this.email, this.password, this.name);
      }

      this.close();

    } catch (err: any) {
      this.firebaseError = this.getFirebaseError(err.code);
    } finally {
      this.isLoading = false;
    }
  }

  isFormValid(): boolean {
    if (this.isLogin) {
      return !!this.email && !!this.password;
    }

    return !!this.name && !!this.email && !!this.password;
  }

  clearError(field: string) {
    this.errors[field] = '';
    this.firebaseError = '';
  }

  clearFirebaseError() {
  this.firebaseError = '';
  }
}
