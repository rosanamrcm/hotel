import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-room.component.html',
  styleUrl: './card-room.component.scss'
})
export class CardRoomComponent {
  @Input() card: any;
  @Output() bookingClick = new EventEmitter<void>();

onBookingClick() {
  this.bookingClick.emit();
}
}
