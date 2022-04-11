import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new Quote('',0, 0,'');
  @Output()addQuote=new EventEmitter<Quote>();
  
  addDetail() {
    this.addQuote.emit(this.newQuote)
  }

  showMe:boolean = true
  toggleMe(){
    this.showMe=!this.showMe
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
