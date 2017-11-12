import { Question } from "./../question/question.model";
import { Answer } from "./answer.model";
import { User } from "../auth/user.model";
import { Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-answer-form",
  templateUrl: "./answer-form.component.html",
  styles: [
    `
    form{
      display: flex;
      flex-direction: column;
      width: 90%
      margin: 40px auto;
      margin-top: 20px;
      margin-bottom: 40px;
    }
    `
  ]
})
export class AnswerFormComponent {
  @Input() question: Question;
  onSubmit(form: NgForm) {
    const answer = new Answer(
      form.value.description,
      this.question,
      new Date(),
      new User(null, null, "Almendra", "Cárdenas Mesa")
    );
    this.question.answers.unshift(answer);
    form.reset();
  }
}
