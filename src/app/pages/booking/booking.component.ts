import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { BookingService } from '../../core/services/booking.service';
import { ModalService } from '../../core/services/modal.service';
import { AuthService } from '../../core/services/auth.service';
import { Booking } from '../../core/models/booking';
import { Room } from '../../core/models/room';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

  booking: Booking | null = null;
  rooms: Room[] = [];
  selectedRoomId: number | null = null;
  total: number = 0;
  confirmed = false;
  pendingBooking: any = null;

  constructor(
    private bookingService: BookingService,
    private authService: AuthService,
    private modalService: ModalService,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.booking = this.bookingService.getBooking();
    this.rooms = this.bookingService.getRooms();

    this.authService.getUserObservable().subscribe(async user => {
      if (user && this.pendingBooking) {

        await this.bookingService.saveBooking(this.pendingBooking);

        this.confirmed = true;
        this.pendingBooking = null;

        // REDIRECIONA DEPOIS DO LOGIN
       this.router.navigate(['/my-bookings'], {
          state: { success: true }
        });
      }
    });
  }

  openLoginModal() {
    this.modalService.openLogin();
  }

  selectRoom(roomId: number) {
    this.selectedRoomId = roomId;

    if (this.booking) {
      this.total = this.bookingService.calculateTotal(
        roomId,
        this.booking.checkIn,
        this.booking.checkOut
      );
    }
  }

  async saveBookingNow() {
    await this.bookingService.saveBooking({
      ...this.booking,
      roomId: this.selectedRoomId,
      total: this.total
    });

    this.confirmed = true;
  }

  async confirmBooking() {

    const user = this.authService.getUser();

    if (!user) {
      this.pendingBooking = {
        ...this.booking,
        roomId: this.selectedRoomId,
        total: this.total
      };

      this.openLoginModal();
      return;
    }

    await this.saveBookingNow();

    // REDIRECIONA
    this.router.navigate(['/my-bookings'], {
      state: { success: true }
    });
  }
}
