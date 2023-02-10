import { Injectable } from "@angular/core";
import { ICommonSelect, IFilterTable, IRequestCardBrandItem, ITableCardBrandItem } from "../models";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "@environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CardBrandService{

  private pathApi = 'card-brand'

  public _isLoadingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  public isLoading$: Observable<boolean> = this._isLoadingSubject$.asObservable()

  public optionBrandStatus: Array<ICommonSelect> = [
    {
      label: "Inactive",
      value: 0
    },
    {
      label: "Active",
      value: 1
    }
  ]

  public optionFilterCardBrand: Array<ICommonSelect>  = [
    {
      label: "All",
      value: -1
    },
    {
      label: "Inactive",
      value: 0
    },
    {
      label: "Active",
      value: 1
    },
  ]

  constructor(private _httpClient: HttpClient){}

  public getAll(filter: IFilterTable):Observable<any>{
    const url = `${environment.apiUrl}${environment.apiVersion1}${this.pathApi}`
    const params = new HttpParams()
      .set('page', filter.page ? filter.page.toString() : 1)
      .set('limit', filter.limit ? filter.limit.toString() : 10)
      .set('search_name', filter.search ? filter.search.trim() : '')
      .set('status', filter.status?.toString() ?? '-1')
    
    return this._httpClient.get<Array<ITableCardBrandItem>>(url, {params})
  }

  public finbdById(id: string):Observable<any>{
    const url = `${environment.apiUrl}${environment.apiVersion1}${this.pathApi}/${id}`
    return this._httpClient.get<any>(url)
  }

  public create(cardBrandBody: IRequestCardBrandItem):Observable<any>{
    const url = `${environment.apiUrl}${environment.apiVersion1}${this.pathApi}`
    return this._httpClient.post<any>(url, cardBrandBody)
  }

  public update(id: string, cardBrandBody: IRequestCardBrandItem):Observable<any>{
    const url = `${environment.apiUrl}${environment.apiVersion1}${this.pathApi}/${id}`
    return this._httpClient.put<any>(url, cardBrandBody)
  }
    
}