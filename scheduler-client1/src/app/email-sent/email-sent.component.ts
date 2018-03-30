import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.css']
})
export class EmailSentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHomePage(): void {
    this.router.navigate(['/scheduler']);
  }

}
