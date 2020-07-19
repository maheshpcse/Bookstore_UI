import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-foams',
  templateUrl: './reactive-foams.component.html',
  styleUrls: ['./reactive-foams.component.css']
})
export class ReactiveFoamsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.FormBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    })
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  submitdata() {
    this.submitted = true;
    console.log('the form grou value is theeeee', this.registerForm.value);
    let obj = {
      title: this.registerForm.value['title'],
      firstName: this.registerForm.value['firstName'],
      lastName: this.registerForm.value['lastName'],
      email: this.registerForm.value['email'],
      password: this.registerForm.value['password'],
      confirmPassword: this.registerForm.value['confirmPassword']
    }
    console.log('the object value is theeeeeee', obj)
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
