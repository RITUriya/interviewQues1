import { Component, OnInit } from '@angular/core';
import { number, date } from 'joi';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  //displays current year
  currentDate: Date = new Date();
  //newDate: any = this.currentYear | 'M/d/yy';
  ngOnInit(): void {}
}
