import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@app/core/services';

@Component({
  selector: 'app-component-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  
  public isCollapse: boolean = false

  constructor(
    private _layoutService: LayoutService
  ){}

  ngOnInit(): void {
    this._layoutService.isToggleLayout$.subscribe(e => this.isCollapse = e)
  }
}
