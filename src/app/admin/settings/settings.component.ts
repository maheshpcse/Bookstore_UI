import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public registerForm: FormGroup;
  addresses: FormArray;
  
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
       addresses: this.fb.array([ this.createAddress() ])
    });
  }

  ngOnInit() {
  }
  createAddress(): FormGroup {
    return this.fb.group({
      address: '',
      street: '',
      city: '',
      country: ''
    });
 }
// component.ts
get addressControls() {
  return this.registerForm.get('addresses')['controls'];
}
addAddress(): void {
  this.addresses = this.registerForm.get('addresses') as FormArray;
  this.addresses.push(this.createAddress());
}
remove(i: number) {
  this.addresses.removeAt(i);
}
}
