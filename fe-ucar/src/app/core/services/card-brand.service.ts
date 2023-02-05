import { Injectable } from "@angular/core";
import { ICommonSelect, IRequestCardBrandItem, ITableCardBrandItem } from "../models";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CardBrandService{

  private pathApi = 'card-brand'

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

  constructor(private _httpClient: HttpClient){}

  public getAll():Observable<any>{
    const url = `${environment.apiUrl}${environment.apiVersion1}${this.pathApi}`
    const params = new HttpParams()
      .set('page', '1')
      .set('limit', "10");

    return this._httpClient.get<Array<ITableCardBrandItem>>(url, {params})
  }

  public finbdById(id: string):Observable<any>{
    const url = `${environment.apiUrl}${environment.apiVersion1}${this.pathApi}/${id}`
    return this._httpClient.get<any>(url)
  }

  public create(cardBrandbody: IRequestCardBrandItem):Observable<any>{
    const url = `${environment.apiUrl}${environment.apiVersion1}${this.pathApi}`
    return this._httpClient.post<any>(url, cardBrandbody)
  }

  public update(id: string, cardBrandbody: IRequestCardBrandItem):Observable<any>{
    const url = `${environment.apiUrl}${environment.apiVersion1}${this.pathApi}/${id}`
    return this._httpClient.put<any>(url, cardBrandbody)
  }
    
}