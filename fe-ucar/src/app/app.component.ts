import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService, ResizeService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ResizeService]
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private commonService: CommonService,
    private resizeService: ResizeService
  ) { }
  
  ngOnInit(): void {
    this.commonService.dynamicPage()
    this.resizeService.detectSize()
  }

  ngOnDestroy(): void {
    const resizeSubscription$ = this.resizeService.getResizeSubscription()
    if (resizeSubscription$){
      resizeSubscription$.unsubscribe()
    }
  }
}
