import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tst-ng-model',
  templateUrl: './tst-ng-model.component.html',
  styleUrls: ['./tst-ng-model.component.scss']
})
export class TstNgModelComponent implements OnInit {
  inputContent: string = 'SAMIR'
  @Input() inputContentBis: string = 'azerty'
  NGCLASS: boolean = false
   mesParams: Record<string, boolean> = { vert: true, coin: true }
  //mesParams: any[] = [{ vert: true }, { coin: true }]

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    console.log('test click');
    console.log(this.inputContent);
  }

  onChangeNgClass(): void {
    console.log('changed avec expression!');
    this.NGCLASS = !this.NGCLASS
  }

  setMesParams(): void {
    this.mesParams['vert'] = !this.mesParams['vert'];
    this.mesParams['coin'] = !this.mesParams['coin'];
  }
  // setMesParams(): void {
  //   this.mesParams[0].vert = !this.mesParams[0].vert;
  //   this.mesParams[1].coin = !this.mesParams[1].coin;
  // }
  onChangeNgClassWithMethod() {
    console.log('changed with method!');
    console.log(this.mesParams[0]);
    this.setMesParams()
  }
}
