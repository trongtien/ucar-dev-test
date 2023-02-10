import { Component, OnInit } from '@angular/core';
import { ResizeService } from '@app/core/services';

@Component({
  selector: 'app-component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isResize: boolean = true

  constructor(private _resizeService: ResizeService){

  }

  ngOnInit(): void {
    this._resizeService.isViewResponsive$.subscribe(e => this.isResize = e)
  }
}
