import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathRouter } from '@app/core/contants';
import { formatRouterLink } from '@app/core/helper';
import { ICommonSelect, IFilterTable, ITableCardBrandItem } from '@app/core/models';
import { CardBrandService } from '@app/core/services';
import { DatePipe } from '@angular/common'
import { environment } from '@environments/environment';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '@app/core/contants/root';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-card-brand',
  templateUrl: './card-brand.component.html',
  styleUrls: ['./card-brand.component.scss']
})
export class CardBrandComponent implements OnInit {
  public selectFilterCardBrandStatus: ICommonSelect = {label: "All", value: -1}
  public isModalCreateBrand: boolean = false
  public isLoadingTable: boolean = false
  public setOfCheckedId = new Set<number>();
  public filterStatusSelect: Array<ICommonSelect> = []
  public linkRootPath = environment.pathImage

  private _isLoadingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
   public isLoading$: Observable<boolean> = this._isLoadingSubject$.asObservable()

  constructor(
    private _cardBrandService: CardBrandService,
    private route: Router,
    private dp: DatePipe
  ){}

  public dataTable: Array<ITableCardBrandItem> = []
  public filterTable:IFilterTable = {
    limit: '10',
    page: '1'
  }

  ngOnInit(): void {
   
    this.fetchApiGetAll(this.filterTable)
    this.filterStatusSelect = this._cardBrandService.optionFilterCardBrand
    
    this.selectFilterCardBrandStatus = this._cardBrandService.optionFilterCardBrand[0]
  }

  public transformDate(date: any){
    return this.dp.transform(
      date,
      'MM/dd/yyyy',
      'es-ES'
    )
  }

  private async fetchApiGetAll(filter: IFilterTable){
    this.isLoadingTable = true
    this._cardBrandService.getAll(filter).subscribe(data => {

      this.dataTable = data.data.items.map((e: ITableCardBrandItem) => {
        return {
          ...e,
          checked: false, 
          expand: false, 
          logo: e.logo === null ? '' : e.logo,
          number_model: 0,
          last_update: e.updated_at === null ? e.created_at : e.updated_at,
          description: e.description === null ? '' : e.description
        }
      })
      this.isLoadingTable = false
    })
  }

  public updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  } 

  public onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
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

  public changeFilterStatus(event: ICommonSelect){
    this.fetchApiGetAll({
      ...this.filterTable,
      search: undefined,
      status: +event.value,
      page: DEFAULT_PAGE,
      limit: DEFAULT_LIMIT
    })
    this.selectFilterCardBrandStatus = event
  }

  public setIsModalCreateBrand(isReload?: boolean){
    this.isModalCreateBrand = !this.isModalCreateBrand
    if(isReload){
      this.fetchApiGetAll({
        limit: DEFAULT_LIMIT,
        page: DEFAULT_PAGE
      })
    }
  }

  public onChangeSearch($event: any ){
    const valueSearch = $event.target.value

    this.fetchApiGetAll({
      ...this.filterTable,
      search: valueSearch.length === 0 ? undefined : valueSearch,
      page: DEFAULT_PAGE,
      limit: DEFAULT_LIMIT,
      status: +this.selectFilterCardBrandStatus.value
    })

    this.filterTable = {
      ...this.filterTable,
      search: valueSearch.length === 0 ? undefined : valueSearch,
      page: DEFAULT_PAGE,
      limit: DEFAULT_LIMIT
    }
  }

  public onDetail(id: number){
    return this.route.navigate(['/card-brand', id])
  }
}
