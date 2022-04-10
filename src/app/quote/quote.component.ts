import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('“The fool doth think he is wise, but the wise man knows himself to be a fool.” ',0, 0,'William Shakespeare'),

  ]
  constructor() { }

  showMe:boolean = true
  toggleMe(){
    this.showMe=!this.showMe
  }
  ngOnInit(): void {
  }

  numberOfLikes : number =0;
  numberOfDislikes : number =0;

  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfDislikes --;
  }
}
