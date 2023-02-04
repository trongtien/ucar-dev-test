import { Injectable } from "@angular/core";
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { BehaviorSubject, Observable, Subscription, fromEvent } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ResizeService {
   
    private resizeObservable$: Observable<Event> | undefined;
    private resizeSubscription$: Subscription | undefined;

    private isMobile: boolean = false
    private isTablet: boolean = false
    private isDesktopDevice: boolean = false
    private screenWidth = 0
    private screenHeight = 0

    private _isViewResponsiveSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    public isViewResponsive$: Observable<boolean> = this._isViewResponsiveSubject$.asObservable()

    constructor(
        private _deviceService: DeviceDetectorService,
    ) { }

    setScreenWidth(size: number) {
        this.screenWidth = size
    }

    setScreenHeight(size: number) {
        this.screenHeight = size
    }

    getResizeSubscription() {
        return this.resizeSubscription$
    }

    detectSize() {
        this.resizeObservable$ = fromEvent(window, 'resize');
        this.resizeSubscription$ = this.resizeObservable$.subscribe((e: any) => {
            let width = window.innerWidth
            let height = window.innerHeight

            this.screenHeight = height
            this.screenWidth = width

            if (width <= 992){
                this._isViewResponsiveSubject$.next(true)
            }else{
                this._isViewResponsiveSubject$.next(false)
            }
        });
    }

    epicFunction() {
        const deviceInfo: DeviceInfo | null = this._deviceService.getDeviceInfo() || null

        if (deviceInfo !== null) {
            this.isMobile = this._deviceService.isMobile()
            this.isTablet = this._deviceService.isTablet()
            this.isDesktopDevice = this._deviceService.isDesktop()
        }
    }
}