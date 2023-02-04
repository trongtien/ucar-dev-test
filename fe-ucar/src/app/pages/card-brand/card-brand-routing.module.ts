import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CardBrandComponent } from "./card-brand.component";
import { DetailComponent } from "./detail/detail.component";

const CardBrandRouter = [
    {
        path: '',
        component: CardBrandComponent,
    },
    {
        path: ':id',
        component: DetailComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(CardBrandRouter)],
    exports: [RouterModule]
})
export class CardBrandRoutingModule {}