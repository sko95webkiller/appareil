
import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  //appareilName: string = 'Machine à laver';
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;
  isAuth: boolean = false;
  

  constructor() {
  }

  ngOnInit(): void {
  }
  getStatus(): string {
    return this.appareilStatus;
  }
}

