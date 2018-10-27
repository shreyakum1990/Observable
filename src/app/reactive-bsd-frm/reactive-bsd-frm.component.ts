import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-bsd-frm',
  templateUrl: './reactive-bsd-frm.component.html',
  styleUrls: ['./reactive-bsd-frm.component.css']
})
export class ReactiveBsdFrmComponent implements OnInit {
private frm : FormGroup;

  constructor() { 
    this.frm = new FormGroup({
      name : new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      email : new FormControl(null)
    })
  }

  ngOnInit() {
  }
  register(){
    console.log('the form value is',this.frm.value);
  }
}
