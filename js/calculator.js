export class Calculator {
   constructor(initialValue) {
     this.setValue = this.setValue.bind(this);
     this.times = this.times.bind(this);
     this.minus = this.minus.bind(this);
     this.plus = this.plus.bind(this);
     this.dividedBy = this.dividedBy.bind(this);
     this.toString = this.toString.bind(this);
     this.fromString = this.fromString.bind(this);

     this.setValue(initialValue);
   }
   setValue(val) {
     this.value = val;
     this.string = '' + val;
   }
   times(val) {
      this.value = this.value * val;
      this.string += '*' + val;
      return this;
   }
   minus(val) {
      this.value -= val;
      this.string += '-' + val;
      return this;
   }
   plus(val) {
      this.value += val;
      this.string += '+' + val;
      return this;
   }
   dividedBy(val) {
      this.value = this.value / val;
      this.string += '/' + val;
      return this;
   }
   toString() {
     return this.string;
   }
   fromString(str) {
      let numbers = [0,1,2,3,4,5,6,7,8,9];
      let operators = ['*', '-', '+', '/'];
      let currentNumberString = '';
      let currentOperatorChar = '';
      let operatorHandlers = {
        '*': this.times,
        '-': this.minus,
        '+': this.plus,
        '/': this.dividedBy
     }
      str.split('').forEach((char) => {
          if (numbers.indexOf(parseInt(char, 10)) !== -1) {
            // store this as part of next number to be used
            currentNumberString += char;
          } else if (operators.indexOf(char) !== -1) {
            // found the next operator
            if (!this.value) {
               // store intial value for operator to be used against if it isn't set
               this.setValue(parseInt(currentNumberString, 10));
            } else {
               // use the last operator, then store this one
               operatorHandlers[currentOperatorChar](parseInt(currentNumberString, 10))
            }
            currentNumberString = '';
            currentOperatorChar = char;

          }
      });
      // do the last operator and number
      operatorHandlers[currentOperatorChar](parseInt(currentNumberString, 10));
      return this;
   }
}
