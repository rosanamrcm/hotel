import { Component, ViewChild } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { ToastComponent } from '../../shared/toast/toast.component';
import { BookingService } from '../../core/services/booking.service';


@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [NgIf, NgFor, HeaderComponent, ToastComponent],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss'
})
export class MyBookingsComponent {

  @ViewChild('toast') toast!: ToastComponent;

  bookings: any[] = [];

  showConfirmModal = false;
  bookingToCancel: string | null = null;

  isLoading = true;

  constructor(private bookingService: BookingService) {}

  async ngOnInit() {
    this.bookings = await this.bookingService.getBookings();
    this.loadBookings();
   if (history.state.success) {
      setTimeout(() => {
        this.toast.show('Your reservation has been successfully confirmed!');
      }, 100); // pequeno delay garante renderização
    }
  }

  async loadBookings() {
    this.isLoading = true;

    this.bookings = await this.bookingService.getBookings();

    this.isLoading = false;
  }

  async cancel(id: string) {
    this.bookingToCancel = id;
    this.showConfirmModal = true;
  }

  async confirmCancel() {
    if (!this.bookingToCancel) return;

    await this.bookingService.deleteBooking(this.bookingToCancel);

    this.showConfirmModal = false;
    this.bookingToCancel = null;

    await this.loadBookings();
  }

  closeConfirm() {
    this.showConfirmModal = false;
    this.bookingToCancel = null;
  }
}
