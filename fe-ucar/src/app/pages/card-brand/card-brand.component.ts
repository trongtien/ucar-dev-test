import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathRouter } from '@app/core/contants';
import { formatRouterLink } from '@app/core/helper';
import { ICommonSelect, ITableCardBrandItem } from '@app/core/models';
import { CardBrandService } from '@app/core/services';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-card-brand',
  templateUrl: './card-brand.component.html',
  styleUrls: ['./card-brand.component.scss']
})
export class CardBrandComponent implements OnInit {
  public selectFilterCardBrand = 'all'
  public isModalCreateBrand: boolean = false

  constructor(
    private _cardBrandService: CardBrandService,
    private route: Router
  ){}

  public filterCardBrand: Array<ICommonSelect> = [
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Last Updated',
      value: 'last_updated'
    },
    {
      label: 'Brand Name',
      value: 'brand_name'
    },
    {
      label: 'Number of Models',
      value: 'number_of_models'
    }
  ]

  public dataTable: Array<ITableCardBrandItem> = []


  ngOnInit(): void {
    this.fetchApiGetAll()
  }


  private fetchApiGetAll(){
    this._cardBrandService.getAll().subscribe(data => this.dataTable = data.data.items.map((e: ITableCardBrandItem) => {
      return {
        ...e,
        checked: false, 
        expand: false, 
        logo: e.logo === null ? '' : e.logo,
        number_model: 0,
        last_update: e.updated_at === null ? e.created_at : e.updated_at,
        description: e.description === null ? '' : e.description
      }
    }))
  }

  public setIsModalCreateBrand(isReload?: boolean){
    this.isModalCreateBrand = !this.isModalCreateBrand
    if(isReload){
      this.fetchApiGetAll()
    }
  }

  public onDetail(id: number){
    this.route.navigate([formatRouterLink(PathRouter.CARD_BRAND), id])
  }
}
