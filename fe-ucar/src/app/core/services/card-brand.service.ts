import { Injectable } from "@angular/core";
import { ICommonSelect } from "../models";

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

    constructor(){}



    
}