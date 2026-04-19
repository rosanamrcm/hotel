import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoomComponent } from '../card-room/card-room.component';

@Component({
  selector: 'app-cards-room',
  standalone: true,
  imports: [CommonModule, CardRoomComponent],
  templateUrl: './cards-room.component.html',
  styleUrl: './cards-room.component.scss'
})
export class CardsRoomComponent {
  @Input() cardList: any;

  @Output() bookingClick = new EventEmitter<void>();

  onBookingClick() {
    this.bookingClick.emit();
  }

}
