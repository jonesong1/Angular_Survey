import { Component, Input, OnInit } from '@angular/core';
import { Options } from '../../types';
import { fakeOptions } from '../../fake-data';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
})
export class OptionsComponent implements OnInit{
    @Input() questionId = '';

    options: Options[] = [];

    answers = '';

    constructor() { }

    ngOnInit(): void {
        const id = this.questionId;
        this.options = fakeOptions.filter(options => options.questionId === id);
        // console.log(this.options);
    }

    onUpdateAnswer(event: Event) {
        console.log(event);
        this.answers = (<HTMLInputElement>event.target).value;
      }
    
}