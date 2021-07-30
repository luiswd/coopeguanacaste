// Detect Closest Edge
const closestEdge = (x,y,w,h) => {
    const topEdgeDist = distMetric(x,y,w/2,0);
    const bottomEdgeDist = distMetric(x,y,w/2,h);
    const min = Math.min(topEdgeDist,bottomEdgeDist);
    return min === topEdgeDist ? 'top' : 'bottom';
}

// Distance Formula
const distMetric = (x,y,x2,y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return (xDiff * xDiff) + (yDiff * yDiff);
}

{closestEdge, distMetric}

const menuuu = document.querySelector('a.menu');
if(menuuu){

    class MenuItem {
        constructor(el) {
            // .menu__item element
            this.DOM = {el: el};
            // .menu__item-link element
            this.DOM.link = this.DOM.el.querySelector('a.menu__item-link');
            // .marquee element
            this.DOM.marquee = this.DOM.el.querySelector('.marquee');
            // .marquee__inner-wrap element
            this.DOM.marqueeInner = this.DOM.marquee.querySelector('.marquee__inner-wrap');
            // some default options for the animation's speed and easing
            this.animationDefaults = {duration: 0.6, ease: 'expo'};
            // events initialization
            this.initEvents();
        }
        initEvents() {
            this.onMouseEnterFn = ev => this.mouseEnter(ev);
            this.DOM.link.addEventListener('scroll', this.onMouseEnterFn);
            this.onMouseLeaveFn = ev => this.mouseLeave(ev);
            this.DOM.link.addEventListener('mouseleave', this.onMouseLeaveFn);
        }
        mouseEnter(ev) {
            // find closest side to the mouse
            const edge = this.findClosestEdge(ev);
            // set the initial y position for both the marquee and marqueeInner elements
            // for the reveal effect to happen, both start at opposite positions
            // the directions are different depending on the direction the cursor enters the element (bottom or top)
            gsap.timeline({defaults: this.animationDefaults})
            .set(this.DOM.marquee, {y: edge === 'top' ? '0' : '0'}, 0)
            .set(this.DOM.marqueeInner, {y: edge === 'top' ? '0' : '0'}, 0)
            .to([this.DOM.marquee, this.DOM.marqueeInner], {y: '0%'}, 0);
        }
        mouseLeave(ev) {
            // find closest side to the mouse
            const edge = this.findClosestEdge(ev);
            
            gsap.timeline({defaults: this.animationDefaults})
            .to(this.DOM.marquee, {y: edge === 'top' ? '0' : '0'}, 0)
            .to(this.DOM.marqueeInner, {y: edge === 'top' ? '0' : '0'}, 0);
        }
        // find closest side to the mouse when entering/leaving
        findClosestEdge(ev) {
            const x = ev.pageX - this.DOM.el.offsetLeft;
            const y = ev.pageY - this.DOM.el.offsetTop;
            return closestEdge(x,y,this.DOM.el.clientWidth, this.DOM.el.clientHeight);
        }
    }

    class Menu {
        constructor(el) {
            // .menu element
            this.DOM = {el: el};
            // the menu items
            this.DOM.menuItems = this.DOM.el.querySelectorAll('.menu__item');
            // array of MenuItem
            this.menuItems = [];
            this.DOM.menuItems.forEach(menuItem => this.menuItems.push(new MenuItem(menuItem)));
        }
    }
    new Menu(document.querySelector('.menu'));
}
