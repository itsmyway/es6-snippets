class pageNav{
  constructor(){
    // this.addEvents.bind(this)
    this.coords = {}
    this.getCoords = this.getCoords.bind(this)
    this.scrollIt = this.scrollIt.bind(this)
  }
  addEvents(){
    let el = document.querySelector('.tabs-nav')

    el.addEventListener('click', (e) => {
      if(e.target.tagName !== 'A') return;
        let id = event.target.dataset.id
        //let targetEl = document.querySelector('#'+id)
        //this.coords = this.getCoords(targetEl)
        e.preventDefault()
        // this.scrollTo(window, 0, this.coords.top, 500, 0)
        //window.scroll(0, this.coords['top'])



        this.scrollIt(
          document.querySelector('#'+id),
          300,
          'easeOutQuad',
          () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
        );
    })
  }
  getCoords(elem) { // crossbrowser version
        let box = elem.getBoundingClientRect();

        let body = document.body;
        let docEl = document.documentElement;

        let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

        let clientTop = docEl.clientTop || body.clientTop || 0;
        let clientLeft = docEl.clientLeft || body.clientLeft || 0;

        let top  = box.top +  scrollTop - clientTop - 60;
        let left = box.left + scrollLeft - clientLeft;

        return { top: Math.round(top), left: Math.round(left) };
      }
      scrollTo(element, from, to, duration, currentTime) {
         if (from <= 0) { from = 0;}
         if (to <= 0) { to = 0;}
         if (currentTime>=duration) return;
         let delta = to-from;
         let progress = currentTime / duration * Math.PI / 2;
         let position = delta * (Math.sin(progress));
         setTimeout(() => {
             element.scrollTop = from + position;
             this.scrollTo(element, from, to, duration, currentTime + 10);
         }, 10);
     }
     scrollIt(destination, duration = 200, easing = 'linear', callback){
       const easings = {
           linear(t) {
             return t;
           },
           easeInQuad(t) {
             return t * t;
           },
           easeOutQuad(t) {
             return t * (2 - t);
           },
           easeInOutQuad(t) {
             return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
           },
           easeInCubic(t) {
             return t * t * t;
           },
           easeOutCubic(t) {
             return (--t) * t * t + 1;
           },
           easeInOutCubic(t) {
             return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
           },
           easeInQuart(t) {
             return t * t * t * t;
           },
           easeOutQuart(t) {
             return 1 - (--t) * t * t * t;
           },
           easeInOutQuart(t) {
             return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
           },
           easeInQuint(t) {
             return t * t * t * t * t;
           },
           easeOutQuint(t) {
             return 1 + (--t) * t * t * t * t;
           },
           easeInOutQuint(t) {
             return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
           }
         };

         const start = window.pageYOffset;
         const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

         const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
         const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
         const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
         const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

         if ('requestAnimationFrame' in window === false) {
           window.scroll(0, destinationOffsetToScroll);
           if (callback) {
             callback();
           }
           return;
         }

         function scroll() {
           const now = 'now' in window.performance ? performance.now() : new Date().getTime();
           const time = Math.min(1, ((now - startTime) / duration));
           const timeFunction = easings[easing](time);
           window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

           if (window.pageYOffset === destinationOffsetToScroll) {
             if (callback) {
               callback();
             }
             return;
           }

           requestAnimationFrame(scroll);
         }

         scroll();
     }
}

let nav = new pageNav()
document.addEventListener('DOMContentLoaded', nav.addEvents())

// function scrollIt() {
//
//
// }
// document.querySelector('.section-5').addEventListener('click', () => {
//
// });
