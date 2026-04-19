import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, getDocs, deleteDoc, doc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

import { Booking } from '../models/booking';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private booking: Booking | null = null;

  constructor(
    private firestore: Firestore, // ✅ AngularFire
    private auth: Auth            // ✅ AngularFire
  ) {}

  // mock de quartos
  private rooms: Room[] = [
    { id: 1, name: 'Single Room', pricePerNight: 100 },
    { id: 2, name: 'Double Room', pricePerNight: 150 },
    { id: 3, name: 'Triple', pricePerNight: 250 }
  ];

  setBooking(data: Booking) {
    this.booking = data;
  }

  getBooking() {
    return this.booking;
  }

  getRooms() {
    return this.rooms;
  }

  calculateTotal(roomId: number, checkIn: string, checkOut: string): number {
    const room = this.rooms.find(r => r.id === roomId);
    if (!room) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diffTime = end.getTime() - start.getTime();
    const nights = diffTime / (1000 * 60 * 60 * 24);

    return nights * room.pricePerNight;
  }

  async saveBooking(booking: any) {
    const user = this.auth.currentUser;

    if (!user) return;

    return await addDoc(collection(this.firestore, 'bookings'), {
      ...booking,
      userId: user.uid
    });
  }

  async getBookings() {
    const user = this.auth.currentUser;
    if (!user) return [];

    const q = query(
      collection(this.firestore, 'bookings'),
      where('userId', '==', user.uid)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  async deleteBooking(id: string) {
    await deleteDoc(doc(this.firestore, 'bookings', id));
  }
}