export class CounterC{
  constructor(value = 0){
    this._value = value
    this.increment = this.increment.bind(this)
  }
  increment(){
    this._value += 1
  }
  decrement(){
    this._value -= 1
  }
  get value(){
    return this._value
  }
  set value(val){
    this._value = val
  }
}
