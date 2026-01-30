import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

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



