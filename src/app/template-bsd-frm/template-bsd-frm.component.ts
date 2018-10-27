import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-bsd-frm',
  templateUrl: './template-bsd-frm.component.html',
  styleUrls: ['./template-bsd-frm.component.css']
})
export class TemplateBsdFrmComponent implements OnInit {
@ViewChild('f') frm;
  constructor() { }

  ngOnInit() {
  }

  register(frm){
    console.log('the value of form is',this.frm.value);
  }

  clear(){
    this.frm.reset();
  }
}
