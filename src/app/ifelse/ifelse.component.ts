import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.scss']
})
export class IfelseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num:number = 0;
  isOdd:boolean = false;

  onKeyUp(){
    if(this.num % 2 == 0){
      this.isOdd = false;
    }
    else{
      this.isOdd = true;
    }
    console.log("User entered "+this.num);
  }

}
