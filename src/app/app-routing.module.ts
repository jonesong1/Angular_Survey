import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveysComponent } from './surveys/surveys.component';
import { QuestionsComponent } from './questions/questions.component';


const routes: Routes = [
  { path: '', redirectTo: '/surveys', pathMatch: 'full' },
  { path: 'surveys', component: SurveysComponent, pathMatch: 'full' },
  { path: 'questions/:id', component: QuestionsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
