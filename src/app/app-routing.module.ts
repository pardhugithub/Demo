import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { MenuThemeComponent } from './menu-theme/menu-theme.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'slider', component: MatSliderComponent },
  { path: 'pc', component: ParentComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'Theme', component: MenuThemeComponent },
  { path: 'table', component: TableComponent },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.module').then((m) => m.FormsPModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  { path: 'AuthRouting', loadChildren: () => import('./auth-routing/auth-routing.module').then(m => m.AuthRoutingModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
