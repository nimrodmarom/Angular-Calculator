import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ang-calculator';

  calcValue: number = 0;
  funcT: any = 'noFunction';

  calcNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any) {
    if (type === 'number') {
      this.onNumberClick(val);
    } else if (type === 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calcNumber !== 'noValue') {
      this.calcNumber = this.calcNumber + val;
    } else {
      this.calcNumber = val;
    }

    this.calcValue = parseFloat(this.calcNumber);
  }

  onFunctionClick(val: string) {
    if (val === 'c') {
      this.clearAll();
    } else if (this.funcT == 'noFunction') {
      this.firstNumber = this.calcValue;
      this.calcValue = 0;
      this.calcNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT !== 'noFunction') {
      this.secondNumber = this.calcValue;

      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string) {
    switch (this.funcT) {
      case '+':
        const total = this.firstNumber + this.secondNumber;
        this.totalAssignValue(total, val);
        break;
      case '-':
        const total2 = this.firstNumber - this.secondNumber;
        this.totalAssignValue(total2, val);
        break;
      case '*':
        const total3 = this.firstNumber * this.secondNumber;
        this.totalAssignValue(total3, val);
        break;
      case '/':
        const total4 = this.firstNumber / this.secondNumber;
        this.totalAssignValue(total4, val);
        break;
      case '%':
        const total5 = this.firstNumber % this.secondNumber;
        this.totalAssignValue(total5, val);
        break;
    }
  }

  totalAssignValue(total: number, val: string) {
    this.calcValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calcNumber = 'noValue';
    this.funcT = val;
    if (val === '=') {
      this.onEqualPress();
    }
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'noFunction';
    this.calcNumber = 'noValue';
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calcValue = 0;
    this.funcT = 'noFunction';
    this.calcNumber = 'noValue';
  }
}
