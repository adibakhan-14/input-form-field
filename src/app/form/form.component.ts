


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profile =  new FormGroup({

  name: new FormControl,
  gender: new FormControl,
  phone: new FormControl,
  dob: new FormControl,
  jobTitle: new FormControl,
});

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profile.value);
}

  constructor() {
    
   }

  ngOnInit(): void {
   
  }

}
