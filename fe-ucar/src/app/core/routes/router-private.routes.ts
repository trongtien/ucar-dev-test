import { Routes } from '@angular/router'

export const RouterPrivate: Routes = [
  { path: 'card-brand',  loadChildren: () => import('@app/pages/card-brand/card-brand.module').then(m => m.CardBrandModule)},
];
  