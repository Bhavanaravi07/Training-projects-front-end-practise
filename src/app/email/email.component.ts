import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email = "bhavana@gmail.com";

  onKeyUp(){
    console.log("Enter key pressed")
  }
}
