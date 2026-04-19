import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = async () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {

    authService.getUserObservable().subscribe(user => {

      if (user) {
        resolve(true);
      } else {
        router.navigate(['/']);
        resolve(false);
      }

    });

  });
}
