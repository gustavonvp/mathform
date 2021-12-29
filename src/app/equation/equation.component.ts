import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from  'rxjs/operators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;
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
  // const startTime = new Date();
  // let numberSolver = 0;

    this.mathForm.statusChanges.pipe(
      filter(value => value ==='VALID'),
      delay(100),
      scan((acc, value) => {
        return {
          numberSolver: acc.numberSolver + 1,
          startTime: acc.startTime
        }

      }, {numberSolver: 0, startTime: new Date()})
      ).subscribe( ({numberSolver, startTime }) => {
        this.secondsPerSolution = (
          new Date().getTime() - startTime.getTime()) / numberSolver / 1000;
      
        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ''
        }); 
    });
  
  }

  randomNumber(){
    return Math.floor(Math.random() * 10);
  }

}
