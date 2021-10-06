import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { StatModule } from '../../shared';
import { AboutModule } from '../about/about.module';
import { ListNewsModule } from '../news/list-news/list-news.module';
import { ListProfessionalModule } from '../professional/list-professional/list-professional.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule, NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        NgSelectModule,
        FormsModule, TranslateModule,
        ListProfessionalModule,
        AboutModule,
        ListNewsModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
