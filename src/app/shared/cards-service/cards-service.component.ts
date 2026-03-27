import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-service.component.html',
  styleUrl: './cards-service.component.scss'
})
export class CardsServiceComponent {

  trackByTitle(index: number, item: any): string {
  return item.title;
}

  services = [
    {
      icon: 'icons/restaurant.svg',
      title: 'Restaurant',
      description: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      icon: 'icons/transport.svg',
      title: 'Transport Facility',
      description: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      icon: 'icons/spa.svg',
      title: 'Spa & Salon',
      description: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      icon: 'icons/wifi.svg',
      title: 'Free Wifi',
      description: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      icon: 'icons/swimming-pool.svg',
      title: 'Swimming Pool',
      description: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      icon: 'icons/mini-bar.svg',
      title: 'Mini Bar',
      description: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      icon: 'icons/conference-room.svg',
      title: 'Conference Room',
      description: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      icon: 'icons/game-room.svg',
      title: 'Game Room',
      description: 'Lorem ipsum dolor sit amet, consectetur'
    }
  ];

}
