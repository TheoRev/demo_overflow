import { Question } from './question.model';
import { Component } from '@angular/core';

const q = new Question(
  '¿Cómo reutilizo un componente en Android?',
  'Miren, esta es mi pregunta...',
  new Date(),
  // 'devicon-android-plain'
  'none'
);

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: [
    './question-list.component.css'
  ]
})
export class QuestionListComponent {
  questions: Question[] = new Array(10).fill(q);
}
