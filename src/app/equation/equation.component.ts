import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { parse } from 'querystring';

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
  }, [
(form: AbstractControl)
 => {
     const {a, b, answer} = form.value;
     if(a + b === parseInt(answer)) {
       return null;
     }

     return { addition: true };
    }
  ]
  
  
  )
  
  constructor() { }

get a() {
  return this.mathForm.value.a;
}

get b() {
  return this.mathForm.value.b;
}


  ngOnInit() {
  }

  randomNumber(){
    return Math.floor(Math.random() * 10);
  }

}
