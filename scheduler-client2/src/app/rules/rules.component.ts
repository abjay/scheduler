import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Rule } from '../rule';
import { Client2Service } from '../client2.service';


@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  rules: Rule[];
  selectedRule: Rule;
  newRule: Rule;

  constructor(private router: Router, private client2Service: Client2Service) { }

  ngOnInit() {
    this.client2Service.getRules().then(rules => this.rules = rules);
    this.newRule = new Rule();
  }

  createRule(rule: Rule): void {
    this.client2Service.createRule(rule)
      .then(rule => {
        this.rules.push(rule);
        this.selectedRule = null;
      });
  }

  deleteRule(rule: Rule): void {
    this.client2Service
      .deleteRule(rule)
      .then(() => {
        this.rules = this.rules.filter(h => h !== rule);
        if (this.selectedRule === rule) { this.selectedRule = null; }
      });
  }

  showTimeslot(rule: Rule): void {
    this.selectedRule = rule;
    this.router.navigate(['/timeslot', this.selectedRule.id]);
  }

}
