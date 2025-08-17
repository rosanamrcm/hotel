import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { CardsRoomComponent } from '../../shared/cards-room/cards-room.component';
import { ServicesComponent } from '../../shared/services/services.component';
import { ButtonPointsComponent } from '../../shared/button-points/button-points.component';
import { FooterComponent } from '../../shared/footer/footer.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardsRoomComponent, ServicesComponent, ButtonPointsComponent, FooterComponent, CommonModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardList = [
    {
      image: 'images/family-room-1.svg', 
      title: 'Family Room', 
      price: 700.00,
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
    },
    {
      image: 'images/family-room-2.svg', 
      title: 'Double Room', 
      price: 600.00,
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
    },
    {
      image: 'images/family-room-3.svg', 
      title: 'Single Room', 
      price: 500.00,
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
    }
  ]

  cardComment = [
    {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.',
      picture: 'images/ellipse-85.svg', 
      stars: [
        {
          star: 'icons/star14.svg'
        },
        {
          star: 'icons/star13.svg'
        }
      ],
      name: "Jane Cooper",
      user: "@Jane Cooper"
    },
    {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.',
      picture: 'images/ellipse-86.svg', 
      stars: [
        {
          star: 'icons/star-14.svg'
        },
        {
          star: 'icons/star-13.svg'
        }
      ],
      name: "Esther Howard",
      user: "@Esther Howard"
    },
    {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.',
      picture: 'images/ellipse-87.svg', 
      stars: [
        {
          star: 'icons/star-14.svg'
        },
        {
          star: 'icons/star-13.svg'
        }
      ],
      name: "Kathryn Murphy",
      user: "@Kathryn Murphy"
    }
  ]
}
