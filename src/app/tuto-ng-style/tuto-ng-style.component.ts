import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuto-ng-style',
  templateUrl: './tuto-ng-style.component.html',
  styleUrls: ['./tuto-ng-style.component.scss']
})
export class TutoNgStyleComponent implements OnInit {
  listStyles = {
    backgroundColor: 'red',
    color: 'white',
    border: 'dotted 2px blue'
  }
  setFontSize(s:number): string {
    return s+'px'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
