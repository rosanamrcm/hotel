import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BookingComponent } from './pages/booking/booking.component';

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
    }
];
