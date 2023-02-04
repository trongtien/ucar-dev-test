import { Routes } from '@angular/router'
import { CardBrandComponent } from '@app/pages/card-brand/card-brand.component';
import { PathRouter } from '../contants';


export const RouterPrivate: Routes = [
  { path: 'card-brand', loadChildren: () => import('@app/pages/card-brand/card-brand.module').then(m => m.CardBrandModule)}
];
  