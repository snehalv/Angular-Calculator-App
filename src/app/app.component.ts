import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayVal = '0';
  firstVal : any = null;
  oprAction: string | null = null;
  title = 'calculator';

  firstNum(val:any) {
    if(this.displayVal === '0')
    this.displayVal = val.toString();
    else
    // debugger
    this.displayVal = this.displayVal+val 
  }

  operation(opr:any){
    this.firstVal = parseFloat(this.displayVal);
    this.oprAction = opr;
    this.displayVal = '';
  }

  calculate(){
    let result:any;
    const fVal:any = this.firstVal;
    const sVal = parseFloat(this.displayVal);

    if(this.oprAction === 'add')
      result = fVal + sVal;
    else if(this.oprAction === 'sub')
      result = fVal - sVal;
    else if(this.oprAction === 'mul')
      result = fVal * sVal;
    else if(this.oprAction === 'div')
      result = fVal / sVal;

    this.firstVal = result;
    this.displayVal = result.toString();
  }

  allClear(){
    this.displayVal = '0';
  }
}
