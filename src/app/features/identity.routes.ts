import { Routes } from '@angular/router';

export const IDENTITY_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full',
  },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./identity/pages/onboarding/onboarding.page').then(
        (m) => m.OnboardingPageComponent
      ),
  },
  {
    path: 'dni-front',
    loadComponent: () =>
      import('./identity/pages/dni-front/dni-front.page').then(
        (m) => m.DniFrontPageComponent
      ),
  },
  {
    path: 'dni-back',
    loadComponent: () =>
      import('./identity/pages/dni-back/dni-back.page').then(
        (m) => m.DniBackPageComponent
      ),
  },
  {
    path: 'selfie',
    loadComponent: () =>
      import('./identity/pages/selfie/selfie.page').then(
        (m) => m.SelfiePageComponent
      ),
  },
  {
    path: 'success',
    loadComponent: () =>
      import('./identity/pages/success/success.page').then(
        (m) => m.SuccessPageComponent
      ),
  },
  {
    path: 'verification-failed',
    loadComponent: () =>
      import('./identity/pages/verification-failed/verification-failed.page').then(
        (m) => m.VerificationFailedPageComponent
      ),
  },
  {
    path: 'max-attempts-exceeded',
    loadComponent: () =>
      import('./identity/pages/max-attempts-exceeded/max-attempts-exceeded.page').then(
        (m) => m.MaxAttemptsExceededPageComponent
      ),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./identity/pages/error-page/error-page.page').then(
        (m) => m.ErrorPageComponent
      ),
  },
];
