import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  openLogin$ = new Subject<void>();

  openLogin() {
    this.openLogin$.next();
  }

  constructor() { }
}
