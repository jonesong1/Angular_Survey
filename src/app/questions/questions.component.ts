import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questions } from '../types';
import { fakeQuestions } from '../fake-data';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  questions: Questions[] = [];
  
  currentQuestionId = '';
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.questions = fakeQuestions.filter(questions => questions.surveyId === id);
  }

}
