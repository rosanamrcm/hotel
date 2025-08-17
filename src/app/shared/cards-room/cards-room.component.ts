import { Component, Input } from '@angular/core';
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

}
