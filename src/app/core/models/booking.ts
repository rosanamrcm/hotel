export interface Booking {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomId?: number;
  total?: number;
}
