import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRoomComponent } from './cards-room.component';

describe('CardsRoomComponent', () => {
  let component: CardsRoomComponent;
  let fixture: ComponentFixture<CardsRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
