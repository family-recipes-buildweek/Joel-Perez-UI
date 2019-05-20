class Carousel{
    constructor(item){
        this.item = item;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.images = document.querySelectorAll('.carousel img');
        // console.log('images', this.images)
        this.currentIndex = 0
        this.images[this.currentIndex].style.display = 'block';
        this.leftButton.addEventListener('click', () => this.scrollLeft())
        this.rightButton.addEventListener('click', () => this.scrollRight())
        this.content = document.querySelector('.content')

    }
    scrollRight(){
        TweenMax.to(this.content, 0.5, {opacity:0})
        TweenMax.to(this.content, 0, {display:'none', delay:0.5})
        TweenMax.to(this.images[this.currentIndex], 0.5, {opacity:0, delay:0.5})
        TweenMax.to(this.images[this.currentIndex], 0, {display:'none', delay:1})
        if (this.images.length-1 === this.currentIndex){this.currentIndex = 0}
        else {this.currentIndex += 1}
        setTimeout(this.updateContent(), 500)
        TweenMax.to(this.images[this.currentIndex], 0, {display:'block',opacity:0, delay:1})
        TweenMax.to(this.images[this.currentIndex], 1, {opacity:1, delay:1})
        TweenMax.to(this.content, 0, {display:'block',opacity:0, delay:1.5})
        TweenMax.to(this.content, 1, {opacity:1, delay:1.5})
    }
    scrollLeft(){
        TweenMax.to(this.content, 0.5, {opacity:0})
        TweenMax.to(this.content, 0, {display:'none', delay:0.5})
        TweenMax.to(this.images[this.currentIndex], 0.5, {opacity:0, delay:0.5})
        TweenMax.to(this.images[this.currentIndex], 0, {display:'none', delay:1})
        if (this.currentIndex === 0){this.currentIndex = this.images.length-1}
        else {this.currentIndex -= 1}
        setTimeout(this.updateContent(), 500)
        TweenMax.to(this.images[this.currentIndex], 0, {display:'block',opacity:0, delay:1})
        TweenMax.to(this.images[this.currentIndex], 1, {opacity:1, delay:1})
        TweenMax.to(this.content, 0, {display:'block',opacity:0, delay:1.5})
        TweenMax.to(this.content, 1, {opacity:1, delay:1.5})
    }
    updateContent(){
        if (this.currentIndex === 0){
            this.content.style.top = '15%'
            this.content.style.left = '15%'
        }
        else if (this.currentIndex === 1){
            this.content.style.top = '70%'
            this.content.style.left = '15%'
        }
    }
}



















const carousel = document.querySelector('.carousel')

const carouselInstance = new Carousel(carousel)