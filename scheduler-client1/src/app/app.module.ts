import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { AppRoutingModule } from './app-routing.module';
import { Client1Service } from './client1.service';


@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    EmailSentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [Client1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
