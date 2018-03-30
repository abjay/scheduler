import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { RulesComponent } from './rules/rules.component';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { AppRoutingModule } from './/app-routing.module';
import { Client2Service } from './client2.service';


@NgModule({
  declarations: [
    AppComponent,
    ThankYouComponent,
    RulesComponent,
    TimeslotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [Client2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
