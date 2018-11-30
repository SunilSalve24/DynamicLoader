import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-secound',
  templateUrl: './demo-secound.component.html',
  styleUrls: ['./demo-secound.component.css']
})
export class DemoSecoundComponent implements OnInit {
  @Input() data : any ;
  @Input() label: string = "";
  @Input() disabled: boolean = false;

  constructor() {
    this.data = "Angular is good";
   }
  ngOnInit() {
      
  }

}
