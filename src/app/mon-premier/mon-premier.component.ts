import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {

  welcome:string="Bonjour, je suis le component mon-premier";
  
  constructor() { }

  ngOnInit(): void {
  }

}
