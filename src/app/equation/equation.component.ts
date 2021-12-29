import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  },
  
  [MathValidators.addition( 'answer', 'a', 'b')]
);

  constructor() { }

get a() {
  return this.mathForm.value.a;
}

get b() {
  return this.mathForm.value.b;
}


  ngOnInit() {
    this.mathForm.statusChanges.subscribe(value =>  {
        if(value === 'INVALID') {
          return;
        }  

        this.mathForm.controls.a.setValue(this.randomNumber());
        this.mathForm.controls.b.setValue(this.randomNumber());
        this.mathForm.controls.answer.setValue('');
    });
  
  }

  randomNumber(){
    return Math.floor(Math.random() * 10);
  }

}
