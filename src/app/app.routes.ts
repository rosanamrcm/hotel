import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BookingComponent } from './pages/booking/booking.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';

export const routes: Routes = [
    { path: '',
    component: HomeComponent 
    },
    { path: 'rooms',
    component: RoomsComponent 
    },
    { path: 'services',
    component: ServicesComponent 
    },
    { path: 'about',
    component: AboutUsComponent 
    },
    { path: 'booking',
    component: BookingComponent 
    },
    { path: 'my-bookings',
      loadComponent: () =>
        import('./pages/my-bookings/my-bookings.component')
          .then(m => m.MyBookingsComponent),
      canActivate: [authGuard] 
    }
];
