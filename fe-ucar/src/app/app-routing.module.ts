import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { RouterPrivate } from './core/routes/router-private.routes';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: RouterPrivate
  },
  {
    path: '**',
    redirectTo: 'card-brand'
  }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: "reload",
    preloadingStrategy: PreloadAllModules
  })]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
