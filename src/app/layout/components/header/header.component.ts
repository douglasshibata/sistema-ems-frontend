import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    public toggleNavbar: boolean;

    constructor(public router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.toggleNavbar = false;
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        return this.toggleNavbar = !this.toggleNavbar;
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }


    openAdminPage() {
        window.open(`${environment.djangoUrl}painel/`);
    }
}
