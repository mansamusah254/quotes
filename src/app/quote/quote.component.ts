import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('it is what it is',0, 0,'Alvin'),
    new Quote('the  mind in the body at peace',0, 0,'Alvin'),
    new Quote('actuality is profanity',0, 0,'Alvin'),
    new Quote('define insanity',0, 0,'Alvin'),
    new Quote('live love life',0, 0,'Alvin'),
    new Quote('the world is a village',0, 0,'Alvin'),
    new Quote('live love life',0, 0,'Alvin'),
    new Quote('the world is a village',0, 0,'Alvin'),
    new Quote('audacity in profanity',0, 0,'Alvin'),
    new Quote('git commit',0, 0,'Alvin'),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
