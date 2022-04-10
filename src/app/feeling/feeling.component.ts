import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeling',
  templateUrl: './feeling.component.html',
  styleUrls: ['./feeling.component.css']
})
export class FeelingComponent implements OnInit {

    numberOfLikes : number = 0;

    likeButtonClick() {
      this.numberOfLikes++;
    }

    
  constructor() { }

  ngOnInit(): void {
  }

}
