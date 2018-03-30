import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RulesComponent } from './rules/rules.component';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: 'timeslot/:id', component: TimeslotComponent },
  { path: 'scheduler', component: RulesComponent },
  { path: 'thankyou', component: ThankYouComponent }
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
