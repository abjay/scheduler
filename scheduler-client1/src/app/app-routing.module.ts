import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RulesComponent } from './rules/rules.component';
import { EmailSentComponent } from './email-sent/email-sent.component';

const routes: Routes = [
  { path: 'scheduler', component: RulesComponent },
  { path: 'emailSent', component: EmailSentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
