import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Quote } from '../quote';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  newQuote = new Quote('',0, 0,'');
  @Output()addQuote=new EventEmitter<Quote>();
  
  addDetail() {
    this.addQuote.emit(this.newQuote)
  }

  quotes:Quote[]=[
    new Quote('“The fool doth think he is wise, but the wise man knows himself to be a fool.” ',0, 0,'William Shakespeare,'),
    new Quote('“fear not for you are not of flesh but Spirit.” ',0, 0,'Somewhere on the Bible'),

  ]
  constructor() { }


  ngOnInit(): void {
  }

  numberOfLikes : number =0;
  numberOfDislikes : number =0;
  likeButtonClick() {
    this.numberOfLikes++;
  }
  dislikeButtonClick() {
    this.numberOfDislikes ++;
  }

}
