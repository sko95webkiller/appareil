import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-appareils';
  isAuth: boolean = false;
  maClasse: string = 'btn btn-success';

  appareilOne:string="Machine à laver";
  appareilTwo:string="Machine à coudre";
  appareilThree:string="Télévison";
  on:string="allumé";
  off:string="éteint";
  

  constructor() {
    setTimeout(() => { this.isAuth = true; }, 3000)
  }
  onAllumer(): void {
    console.log("onAllumer clicked !");
  }

}
