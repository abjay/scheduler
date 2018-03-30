import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Rule } from '../rule';
import { Appointment } from '../appointment';
import { Client2Service } from '../client2.service';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {

  rule: Rule;
  appointment: Appointment;

  constructor(
    private client2Service: Client2Service,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.client2Service.getRule(+params['id']))
    .subscribe(rule => this.rule = rule);
    this.route.params.switchMap((params: Params) => this.client2Service.getRule(+params['id']))
    .subscribe(rule => this.appointment = rule);
  }

  selectTime(rule: Rule): void {
    this.appointment.id = rule.id;
    this.appointment.day = rule.day;
    this.appointment.timeslot = rule.timeslot;
    this.client2Service.selectTime(this.appointment);
    this.router.navigate(['/thankyou']);
  }

  updateRule(): void {
    this.client2Service.updateRule(this.rule);
    this.goBack();
  }
  
  goBack(): void {
    this.location.back();
  }

}
