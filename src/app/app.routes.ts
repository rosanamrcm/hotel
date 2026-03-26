import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ServicesComponent } from './pages/services/services.component';

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
];
