import searchStates from './search.js';
import myCarousel from './component/carousel.js';
import getAllItems from './source.js';
import * as resultSearchJs from './component/resultSearch.js';

resultSearchJs.search.addEventListener('input', () => {
    
    if(resultSearchJs.search.value == '') {
        resultSearchJs.resultList.innerHTML = '';
        getAllItems();
    }

    searchStates(resultSearchJs.search.value);
    const itemsElement = document.getElementById('selectedItem');
    itemsElement.innerHTML = '';

});

const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
});

getAllItems();


