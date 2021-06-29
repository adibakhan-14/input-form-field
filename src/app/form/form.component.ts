import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  

  name= new FormControl;
  gender= new FormControl;
  phone= new FormControl;
  dob= new FormControl;
  jobTitle = new FormControl;

  updateName(){
    this.name.setValue('Nayar');
  }

  constructor() { }

  ngOnInit(): void {
   
  }

}
