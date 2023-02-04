import { OnInit, Component } from '@angular/core';
import { LayoutService, ResizeService } from '@app/core/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  
  public isCollapsed: boolean = false;
  public isResize: boolean = false

  constructor( 
    private _layoutService: LayoutService,
    private _resideService: ResizeService
  ){}

  ngOnInit(): void {
    this._layoutService.isToggleLayout$.subscribe(e => this.isCollapsed = e)
    this._resideService.isViewResponsive$.subscribe((e: boolean) => this.isResize = e)
  }
  
}
