import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'ems', pathMatch: 'prefix' },
            {
                path: 'ems',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            {
                path: 'professional/:id',
                loadChildren: () => import('./professional/professional.module').then((m) => m.ProfessionalModule)
            },
            {
                path: 'about',
                loadChildren: () => import('./about/about.module').then((m) => m.AboutModule)
            },
            {
                path: 'news',
                loadChildren: () => import('./news/news.module').then((m) => m.NewsModule)
            },
            {
                path: 'become-our-partner',
                loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
