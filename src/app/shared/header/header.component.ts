import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { AuthService } from '../../core/services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginModalComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  userName: string | null = null;
  menuOpen = false;

  constructor (
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getUserObservable().subscribe(async user => {
      if (user) {
        const data = await this.authService.getUserData(user.uid);
        this.userName = data?.name;
      } else {
        this.userName = null;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.userName = null;
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  home(): void {
    this.router.navigate(['']);
  }

  rooms() :void {
    this.router.navigate(['/rooms']);
  }

  services(): void {
    this.router.navigate(['/services']);
  }

  aboutUs(): void {
    this.router.navigate(['/about']);
  }

   booking(): void {
    this.router.navigate(['/booking']);
  }

   myBookings(): void {
    this.router.navigate(['/my-bookings']);
  }

}
