import { Injectable } from "@angular/core";
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap, tap } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CommonService {

    public tootleLayout: boolean = true

    private titleBase: string = 'Ucar Dev Test'

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private meta: Meta,
        private titleService: Title
    ) { }

    public setTitle(newTitle: string | undefined) {
        if(newTitle){
            this.titleService.setTitle(`${this.titleBase} |  ${newTitle}`)
        }
        else{
            this.titleService.setTitle(this.titleBase)
        }
    }

    public setToggle(){
        this.tootleLayout = !this.tootleLayout
    }

    public getTitle() {
        return this.titleService.getTitle()
    }

    public updateDescription(description: string) {
        if (description) {
            this.meta.updateTag({ name: 'description', content: description });
        }
    }

    public dynamicPage() {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((route) => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                }),
                filter((route) => route.outlet === 'primary'),
                mergeMap((route) => route.data),
                tap(({ title, description }: Data) => {
                    this.setTitle(title)

                    if(description){
                        this.updateDescription(description)
                    }
                })
            ).subscribe();
    }
}