import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MatSliderModule } from '@angular/material/slider';

import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjs/rxjs.component';

import { HttpClientModule } from "@angular/common/http";
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [AppComponent, MatSliderComponent, NavComponent, HomeComponent, ParentComponent, ChildComponent, RxjsComponent, HighlightDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
