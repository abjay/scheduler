import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Rule } from '../rule';
import { Appointment } from '../appointment';
import { Client1Service } from '../client1.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  rules: Rule[];
  selectedRule: Rule;
  newRule: Rule;
  emailAddress: String;
  appointments: Appointment[];


  constructor(private router: Router, private client1Service: Client1Service) { }

  ngOnInit() {
    this.client1Service.getRules().then(rules => this.rules = rules);
    this.client1Service.getAppointments().then(appointments => this.appointments = appointments);
    this.newRule = new Rule();
  }

  createRule(rule: Rule): void {
    this.client1Service.createRule(rule)
      .then(rule => {
        this.rules.push(rule);
        this.selectedRule = null;
      });
  }

  sendEmail(emailAddress: HTMLInputElement): void {
    console.log(`You wrote: ${emailAddress.value}`);
    this.client1Service.sendEmail(emailAddress.value);
    this.router.navigate(['/emailSent']);
  }

  deleteRule(rule: Rule): void {
    this.client1Service
      .deleteRule(rule)
      .then(() => {
        this.rules = this.rules.filter(h => h !== rule);
        if (this.selectedRule === rule) { this.selectedRule = null; }
      });
  }

  deleteAppointment(appointment: Appointment): void {
    this.client1Service
      .deleteAppointment(appointment)
      .then(() => {
        this.appointments = this.appointments.filter(h => h !== appointment);
      });
  }
  
}
