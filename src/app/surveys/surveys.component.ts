import { Component, OnInit } from '@angular/core';
import { Surveys } from '../types';
import { fakeSurveys } from '../fake-data';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  surveys: Surveys[] = [];

  constructor() { }

  ngOnInit(): void {
    this.surveys = fakeSurveys;
  }

}
