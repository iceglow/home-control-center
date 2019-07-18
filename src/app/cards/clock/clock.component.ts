import { Component, OnInit } from '@angular/core';
import {timer} from "rxjs";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  date: Date = new Date();

  constructor() { }

  ngOnInit() {
    timer(0, 1000).subscribe(() => {
      this.date = new Date();
    });
  }
}
