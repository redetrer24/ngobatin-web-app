import searchStates from './search.js';
import myCarousel from './component/carousel.js';

search.addEventListener('input', () => searchStates(search.value));
const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
});

