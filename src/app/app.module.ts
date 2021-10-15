import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MaterialModule } from './material.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuThemeComponent } from './menu-theme/menu-theme.component';
import { FormsPModule } from './forms/forms.module';
@NgModule({
  declarations: [
    AppComponent,
    MatSliderComponent,
    NavComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    RxjsComponent,
    HighlightDirective,
    MenuThemeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-unversal' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    FormsPModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
