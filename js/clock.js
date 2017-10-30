export class Clock{
  constructor(){
    this.render = this.render.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }
  render(){
    this.date = new Date()
    this.hrs = this.date.getHours()
    this.mins = this.date.getMinutes()
    this.secs = this.date.getSeconds()
    this.output = `${this.hrs}:${this.mins}:${this.secs}`
    console.log(this.output)
  }
  stop(){
    clearInterval(this.timer)
  }
  start(){
    this.render()
    this.timer = setInterval(() => this.render(), 1000)
  }
}
