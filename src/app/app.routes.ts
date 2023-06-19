import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/index/index.component').then((mod) => mod.IndexComponent),
  },
  {
    path: 'header',
    loadComponent: () =>
      import('./layout/header/header.component').then(
        (mod) => mod.HeaderComponent
      ),
  },
  {
    path: 'footer',
    loadComponent: () =>
      import('./layout/footer/footer.component').then(
        (mod) => mod.FooterComponent
      ),
  },
];
