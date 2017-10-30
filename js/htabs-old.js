(
  function (global) {
    if (!global.Intuit) {
      global.Intuit = {};
    }
    class HTabs{
      /**
      * @description here we add our defualt state
      */
      constructor () {
        this.tabLinks = document.querySelector('.htabs')
        this.scrollIt = this.scrollIt.bind(this)
        this.addListeners();
        return this;
      }
      addListeners(){
        this.tabLinks.addEventListener('click', this.scrollTo.bind(this), false)
        window.addEventListener("scroll", this.fixNav.bind(this), false)
      }
      fixNav(event){
        debugger;
        let elHeight = document.querySelector('.videoHeader')
        let attachTo = document.querySelector('.htabs')
        if (window.scrollY >= elHeight.getBoundingClientRect().height){
          attachTo.classList.add('fixed')
        } else {
          attachTo.classList.remove('fixed')
        }
      }
      scrollTo(event){
        if(event.target.tagName !== 'A') return;
        event.preventDefault()
        let id = event.target.getAttribute('href')
        debugger;
        this.scrollIt(
          document.querySelector(id),
          300,
          'easeOutQuad',
          () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
        );
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
         const destinationOffset = typeof destination === 'number' ? destination-120 : destination.offsetTop-120;
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
    Intuit.HTabs = new HTabs();
  })(window);
