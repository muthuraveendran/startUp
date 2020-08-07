import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-validation',
  templateUrl: './app-validation.component.html',
  styleUrls: ['./app-validation.component.css']
})
export class AppValidationComponent implements OnInit {

  constructor() { }

  @Input() control;
  @Input() submit;

  ngOnInit(): void {
  }

}
