import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { CardsRoomComponent } from '../../shared/cards-room/cards-room.component';
import { CardsServiceComponent } from '../../shared/cards-service/cards-service.component';
import { ButtonPointsComponent } from '../../shared/button-points/button-points.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { BookingService } from '../../core/services/booking.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, CardsRoomComponent, CardsServiceComponent, ButtonPointsComponent, FooterComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  checkIn: string = '';
  checkOut: string = '';
  adults: number | null = null;
  children: number | null = null;

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) {}


  errors = {
  checkIn: '',
  checkOut: '',
  adults: '',
  children: ''
  };

  // CHECK-IN
  validateCheckIn() {
    const today = new Date().toISOString().split('T')[0];

    if (!this.checkIn) {
      this.errors.checkIn = 'Select check-in date';
    } else if (this.checkIn < today) {
      this.errors.checkIn = 'Cannot be in the past';
    } else {
      this.errors.checkIn = '';
    }

    // revalida checkout também (dependência)
    if(this.checkOut) {
      this.validateCheckOut();
    }
    
  }

  // CHECK-OUT
  validateCheckOut() {
    if (!this.checkOut) {
      this.errors.checkOut = 'Select check-out date';
    } else if (!this.checkIn) {
      this.errors.checkOut = 'Select check-in first';
    } else if (this.checkOut <= this.checkIn) {
      this.errors.checkOut = 'Must be after check-in';
    } else {
      this.errors.checkOut = '';
    }
  }

  // ADULTS
  validateAdults() {
    if (this.adults === null || this.adults <= 0) {
    this.adults = 1; // trava mínimo
    this.errors.adults = 'Minimum 1 adult required';
    } else {
    this.errors.adults = '';
    }
  }

  // CHILDREN
  validateChildren() {
    if (this.children === null || this.children < 0) {
    this.children = 0; // trava mínimo
    this.errors.children = '';
    } else {
    this.errors.children = '';
    }
  }

  // verifica se tudo está válido
  isFormValid(): boolean {
    return !!(
      this.checkIn &&
      this.checkOut &&
      this.adults !== null &&
      this.children !== null &&
      !this.errors.checkIn &&
      !this.errors.checkOut &&
      !this.errors.adults &&
      !this.errors.children
    );
  }

  bookNow() {
     // valida todos os campos manualmente
    this.validateCheckIn();
    this.validateCheckOut();
    this.validateAdults();
    this.validateChildren();

    //  bloqueia se inválido
    if (!this.isFormValid()) return;

    // cria o booking
    const booking = {
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      adults: this.adults!,
      children: this.children!
    };

    this.bookingService.setBooking(booking);
    this.router.navigate(['/booking']);
  }

    
  scrollToBooking() {
    const element = document.getElementById('booking-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  cardList = [
    {
      image: 'images/family-room-3.svg', 
      title: 'Single Room', 
      price: 100.00,
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
      image: 'images/family-room-1.svg', 
      title: 'Double Room', 
      price: 150.00,
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
      title: 'Triple Room', 
      price: 200.00,
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
