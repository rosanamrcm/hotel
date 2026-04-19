import { Component } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgIf],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  message: string = '';
  visible: boolean = false;

  show(msg: string) {
    this.message = msg;
    this.visible = true;

    setTimeout(() => {
      this.visible = false;
    }, 3000);
  }
}
