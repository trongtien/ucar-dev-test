import { Injectable } from "@angular/core";
import { ICommonSelect } from "../models";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CardBrandService{

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

    public getAll():Observable<any[]>{
      return this._httpClient.get<any[]>(apiUrl).pipe(
    }

    
}