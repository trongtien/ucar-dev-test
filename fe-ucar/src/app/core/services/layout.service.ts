import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class LayoutService{
    
    private _isToggleLayoutSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    public isToggleLayout$: Observable<boolean> = this._isToggleLayoutSubject$.asObservable()
    
    constructor(){}

    public setToggleLayout(isToggle: boolean): void{
        return this._isToggleLayoutSubject$.next(!isToggle)
    }
}