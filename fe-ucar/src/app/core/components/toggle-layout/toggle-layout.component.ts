import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { LayoutService, ResizeService } from '@app/core/services';

@Component({
  selector: 'app-toggle-layout',
  templateUrl: './toggle-layout.component.html',
  styleUrls: ['./toggle-layout.component.scss']
})
export class ToggleLayoutComponent implements OnInit {
  public isViewIcon = true
  public isCollapsed = true

  constructor(
    private _resizeService: ResizeService,
    private _layoutService: LayoutService
  ) { }
  
  
  ngOnInit(): void {
    this._resizeService.isViewResponsive$.subscribe(e => this.isViewIcon = e)
    this._layoutService.isToggleLayout$.subscribe(e => {
      this.isCollapsed = e
    })
  }

  public changeToggleLayout(){
    this._layoutService.setToggleLayout(this.isCollapsed)
  }
}
