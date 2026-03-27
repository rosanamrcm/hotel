import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  team = [
    {
      name: 'Robert Fox',
      role: 'managing director',
      phone: '(316) 555-0116',
      image: 'images/robert.svg'
    },
    {
      name: 'Wade Warren',
      role: 'Chef',
      phone: '(480) 555-0103',
      image: 'images/wade.svg'
    },
    {
      name: 'Jenny Wilson',
      role: 'Reception',
      phone: '(239) 555-0108',
      image: 'images/jenny.svg'
    }
  ];
}
