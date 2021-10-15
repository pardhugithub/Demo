import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { MenuThemeComponent } from './menu-theme/menu-theme.component';
import { ParentComponent } from './parent/parent.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'slider', component: MatSliderComponent },
  { path: 'pc', component: ParentComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'Theme', component: MenuThemeComponent },
  {
    path: 'forms',
    loadChildren: () => import(`./forms/forms.module`).then(
      module => module.FormsPModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
