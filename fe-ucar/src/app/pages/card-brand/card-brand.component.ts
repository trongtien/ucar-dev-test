import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PathRouter } from '@app/core/contants';
import { formatRouterLink } from '@app/core/helper';
import { ICommonSelect, ITableCardBrandItem } from '@app/core/models';

@Component({
  selector: 'app-card-brand',
  templateUrl: './card-brand.component.html',
  styleUrls: ['./card-brand.component.scss']
})
export class CardBrandComponent {
  public selectFilterCardBrand = 'all'
  public isModalCreateBrand: boolean = false

  constructor(private route: Router){}

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

  public dataTable: Array<ITableCardBrandItem> = [
    {
      id: 1,
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      id: 2,
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 2,
      checked: false,
      expand: false
    },
    {
      id: 3,
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee Jeep Grand Cherokee Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 2,
      checked: false,
      expand: false
    },
    {
      id: 4,
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      id: 5,
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      id: 6,
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      id: 7,
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      id: 8,
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      id: 9,
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    }
  ]

  public setIsModalCreateBrand(){
    console.log('setIsModalCreateBrand')
    this.isModalCreateBrand = !this.isModalCreateBrand
  }

  public onDetail(id: number){
    this.route.navigate([formatRouterLink(PathRouter.CARD_BRAND), id])
  }
}
