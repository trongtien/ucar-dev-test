import { ModuleWithProviders, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { NgZorroIconModule } from './ng-zorro-icon/ng-zorro-icon.module';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ToggleLayoutComponent } from './components/toggle-layout/toggle-layout.component';
import { CommonService, LayoutService, ResizeService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { transformDate } from './pipe';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ToggleLayoutComponent,
    transformDate
  ],
  imports: [
    NgZorroModule,
    NgZorroIconModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    NgZorroModule,
    NgZorroIconModule,
    RouterModule,
    HttpClientModule
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [
        CommonService,
        LayoutService,
        ResizeService
      ]
    };
  }
}
