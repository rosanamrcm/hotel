import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { CardsRoomComponent } from '../../shared/cards-room/cards-room.component';
import { ButtonPointsComponent } from '../../shared/button-points/button-points.component';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RouterModule, HeaderComponent, CardsRoomComponent, ButtonPointsComponent, FooterComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

 roomsImages = [
    'images/family-room-1.svg',
    'images/family-room-4.svg',
    'images/family-room-5.svg',
    'images/family-room-6.svg',
    'images/family-room-7.svg',
    'images/family-room-8.svg',
    'images/family-room-9.svg',
    'images/family-room-10.svg',
    'images/family-room-11.svg'
  ];

  cardList = this.roomsImages.map(image => ({
    image: image,
    title: 'Family Room',
    price: 799.00,
    icons: [
      { 
        icon: 'icons/bed-queen-outline.svg', 
        info: 'AGuest'
      },
      {
        icon: 'icons/outline-fit-screen.svg', 
        info: '90Ft'
      }
    ]
  }));


}
