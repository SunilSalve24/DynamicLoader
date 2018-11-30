import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-content',
  templateUrl: './demo-content.component.html',
  styleUrls: ['./demo-content.component.css']
})
export class DemoContentComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit() {
  }

}
