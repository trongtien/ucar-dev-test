import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core'
import { CoreModule } from '@app/core/core.module';
import { CardBrandComponent } from './card-brand.component';
import { CommonModule } from '@angular/common';
import { CardBrandRoutingModule } from './card-brand-routing.module';
import { ModalCuCardBrandComponent } from './modal-cu-card-brand/modal-cu-card-brand.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        CardBrandRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CardBrandComponent
    ],
    declarations: [
        CardBrandComponent,
        ModalCuCardBrandComponent,
        DetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CardBrandModule { }