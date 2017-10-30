export class Slider{
  constructor(){
    this.slides = document.querySelectorAll('.carousel-page')
    this.drawer = document.querySelector('.open')
    this.addEvents = this.addEvents.bind(this)
  }
  addEvents(){
    Array.from(this.slides).forEach((ul) => {
      ul.addEventListener('click', this.switchContent.bind(this), false)
    })
    this.drawer.addEventListener('click', this.slideDrawer.bind(this), false)
  }
  switchContent(e){
    if(e.target.tagName === 'IMG'){
      let id = e.target.getAttribute('data-id')
      let active = document.querySelector('div.carousel-container.active')
      active.classList.toggle('active')
      document.querySelector('#'+id).classList.toggle('active')
    }
  }
  slideDrawer(e){
    e.preventDefault()
    event.target.closest('.active').classList.add('modal')
    // document.querySelector('div.active').classList.add('modal')
  }
}

let slider = new Slider()
slider.addEvents()


// removeData(data){
//   let curr = this.head
//   let prev = this.head
//
//   while(curr){
//     if(curr.data === data){
//       if(curr === this.head){
//         this.head = this.head.next
//       }
//       if(curr === this.tail){
//         this.tail = prev
//       }
//       prev.next = curr.next
//       this.numberOfValues--;
//     } else {
//       prev = cur
//     }
//
//     curr = curr.next
//   }
// }
