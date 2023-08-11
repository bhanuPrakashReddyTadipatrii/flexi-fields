import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public formFields: any = [
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "placeholder": "Enter your name",
      "required": true
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "placeholder": "Enter your email",
      "required": true
    },
    {
      "name": "age",
      "label": "Age",
      "type": "number",
      "placeholder": "Enter your age",
      "required": false
    },
    {
      "name": "gender",
      "label": "Gender",
      "type": "select",
      "options": ["Male", "Female", "Other"],
      "placeholder": "Select your gender",
      "required": true
    },
    {
      "name": "subscribe",
      "label": "Subscribe",
      "type": "checkbox",
      "checkboxLabel": "Subscribe to newsletter",
      "required": false
    },
    {
      "name": "birthdate",
      "label": "Birthdate",
      "type": "date",
      "placeholder": "Select your birthdate",
      "required": true
    },
    {
      "name": "password",
      "label": "Password",
      "type": "password",
      "placeholder": "Enter your password",
      "required": true
    },
    {
      "name": "country",
      "label": "Country",
      "type": "select",
      "options": ["USA", "Canada", "UK", "Australia"],
      "placeholder": "Select your country",
      "required": true
    },
    {
      "name": "comments",
      "label": "Comments",
      "type": "textarea",
      "placeholder": "Enter your comments",
      "required": false
    }
  ];  

  onFormValueChanged(formValues: any): void {
    console.log('Form Values Changed:', formValues);
  }

  onFieldFocusOut(event: any): void {
    console.log('Field Focus Out:', event);
  }
}
