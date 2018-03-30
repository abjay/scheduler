import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Rule } from './rule';
import { Appointment } from './appointment';

@Injectable()
export class Client2Service {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private schedulerUrl = '/api/scheduler';

  getRules(): Promise<Rule[]> {
    return this.http.get(this.schedulerUrl + "/allRules")
      .toPromise()
      .then(response => response.json() as Rule[])
      .catch(this.handleError);
  }

  getRule(id: number): Promise<Rule> {
    const url = `${this.schedulerUrl}/getRule/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Rule)
      .catch(this.handleError);
  }

  getAppointment(id: number): Promise<Appointment> {
    const url = `${this.schedulerUrl}/getAppointment/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Appointment)
      .catch(this.handleError);
  }

  createRule(rule: Rule): Promise<Rule> {
    return this.http
      .post(this.schedulerUrl + "/createRule", JSON.stringify(rule), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Rule)
      .catch(this.handleError);
  }

  selectTime(appointment: Appointment): Promise<Appointment> {
    return this.http
      .post(this.schedulerUrl + "/selectTime", JSON.stringify(appointment), { headers: this.headers })
      .toPromise()
      .then(() => appointment)
      .catch(this.handleError);
  }

  updateRule(rule: Rule): Promise<Rule> {
    return this.http
      .post(this.schedulerUrl + "/updateRule", JSON.stringify(rule), { headers: this.headers })
      .toPromise()
      .then(() => rule)
      .catch(this.handleError);
  }
  
  deleteRule(rule: Rule): Promise<void> {
    const url = `${this.schedulerUrl}/deleteRule/${rule.id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
