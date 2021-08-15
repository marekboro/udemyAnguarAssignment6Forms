import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('practiceForm') testForm: NgForm;
  submitted = false;

  submition = {
    email: "",
    subscriptionType: "",
    password: ""
  }

  defaultSelection = "advanced"
  onSubmit() {
    console.log(this.testForm.value)
    this.submitted = true
    this.submition.email= this.testForm.value.email;
    this.submition.subscriptionType = this.testForm.value.subscriptionType;
    this.submition.password = this.testForm.value.password;
    console.log(this.submition)
   
  }

}
