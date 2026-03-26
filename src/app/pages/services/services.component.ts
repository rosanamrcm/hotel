import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { CardsServiceComponent } from '../../shared/cards-service/cards-service.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ RouterModule, HeaderComponent, CardsServiceComponent, FooterComponent ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
