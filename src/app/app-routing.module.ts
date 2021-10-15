import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { HomeComponent } from './home/home.component';
import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { MenuThemeComponent } from './menu-theme/menu-theme.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'slider', component: MatSliderComponent },
  { path: 'pc', component: ParentComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'ReactiveForms', component: ReactiveFormsComponent },
  { path: 'DynamicForm', component: DynamicFormComponent },
  { path: 'TemplateDriven', component: TemplateDrivenComponent },
  { path: 'Theme', component: MenuThemeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
