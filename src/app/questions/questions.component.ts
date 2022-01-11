import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questions, Options } from '../types';
import { fakeQuestions } from '../fake-data';
import { fakeOptions } from '../fake-data';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  questions: Questions[] = [];
  options: Options[] = [];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.questions = fakeQuestions.filter(questions => questions.surveyId === id);

    
    // this.options = fakeOptions.filter(options => options.questionId === this.questions.id);
    // console.log(this.options);
  }

}
