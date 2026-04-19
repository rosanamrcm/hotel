import { authState } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { UserApp } from '../models/userApp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User | null = null;
  user$;

  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {
    // 🔥 Observable do usuário
    this.user$ = authState(this.auth);

    // 🔥 estado atual
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }

  getUserObservable() {
    return this.user$;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string, name: string) {
    const cred = await createUserWithEmailAndPassword(this.auth, email, password);

    await setDoc(doc(this.firestore, 'users', cred.user.uid), {
      uid: cred.user.uid,
      email: cred.user.email,
      name: name
    });
  }

  async getUserData(uid: string) {
    const docRef = doc(this.firestore, 'users', uid);
    const snap = await getDoc(docRef);

    return snap.data() as UserApp;
  }

  logout() {
    return signOut(this.auth);
  }

  getUser() {
    return this.user;
  }
}