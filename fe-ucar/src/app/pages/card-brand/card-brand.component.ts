import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathRouter } from '@app/core/contants';
import { formatRouterLink } from '@app/core/helper';
import { ICommonSelect, IFilterTable, ITableCardBrandItem } from '@app/core/models';
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
  public filterTable:IFilterTable = {
    limit: '10',
    page: '1'
  }


  ngOnInit(): void {
    this.fetchApiGetAll(this.filterTable)
  }


  private fetchApiGetAll(filter: IFilterTable){
    this._cardBrandService.getAll(filter).subscribe(data => this.dataTable = data.data.items.map((e: ITableCardBrandItem) => {
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

  public changePageSize(event: number) {
    this.fetchApiGetAll({
      ...this.filterTable,
      limit: event.toString()
    })

    this.filterTable = {
      ...this.filterTable,
      limit: event.toString()
    }
  }

  public changePageIndex(event: number){
    this.fetchApiGetAll({
      ...this.filterTable,
      page: event.toString()
    })

    this.filterTable = {
      ...this.filterTable,
      page: event.toString()
    }
  }

  public setIsModalCreateBrand(isReload?: boolean){
    this.isModalCreateBrand = !this.isModalCreateBrand
    if(isReload){
      this.fetchApiGetAll({
        limit: '10',
        page: '1'
      })
    }
  }

  public onChangeSearch($event: any ){
    const valueSearch = $event.target.value

    this.fetchApiGetAll({
      ...this.filterTable,
      search: valueSearch.length === 0 ? undefined : valueSearch,
      page: '1',
      limit: '10'
    })

    this.filterTable = {
      ...this.filterTable,
      search: valueSearch.length === 0 ? undefined : valueSearch,
      page: '1',
      limit: '10'
    }
  }

  public onDetail(id: number){
    this.route.navigate([formatRouterLink(PathRouter.CARD_BRAND), id])
  }
}
