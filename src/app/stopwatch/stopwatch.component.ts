import { Component, OnInit } from '@angular/core';
import { Stopwatch } from '../stopwatch' 

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  constructor() {}
  

  ngOnInit() {
  }

  stopwatch = new Stopwatch();

}
