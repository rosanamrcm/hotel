import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { CardsRoomComponent } from '../../shared/cards-room/cards-room.component';
import { ButtonPointsComponent } from '../../shared/button-points/button-points.component';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [HeaderComponent, CardsRoomComponent, ButtonPointsComponent, FooterComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  constructor(private router: Router) {}

  roomTypes = [
    {
      title: 'Single Room',
      price: 100,
      images: [
        'images/family-room-3.svg',
        'images/family-room-4.svg',
        'images/family-room-5.svg'
      ]
    },
    {
      title: 'Double Room',
      price: 150,
      images: [
        'images/family-room-6.svg',
        'images/family-room-7.svg',
        'images/family-room-8.svg'
      ]
    },
    {
      title: 'Triple Room',
      price: 200,
      images: [
        'images/family-room-9.svg',
        'images/family-room-10.svg',
        'images/family-room-11.svg'
      ]
    }
  ];

  getIcons() {
    return [
      { icon: 'icons/bed-queen-outline.svg', info: '1 Guest' },
      { icon: 'icons/outline-fit-screen.svg', info: '90Ft' }
    ];
  }

  cardList = this.roomTypes.flatMap(room =>
    room.images.map(image => ({
      image,
      title: room.title,
      price: room.price,
      icons: this.getIcons()
    }))
  );

  goToHome() {
    this.router.navigate(['/'], { fragment: 'booking-form' });
  }
}
