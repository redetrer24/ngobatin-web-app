import getAllItems from './api.js';
import searchStates from './search.js';
import myNavbar from './component/navbar.js';
import myCarousel from './component/carousel.js';
import * as resultSearchJs from './component/resultSearch.js';

document.addEventListener("DOMContentLoaded", function () {
    
    resultSearchJs.search.addEventListener('input', () => {
        
        if(resultSearchJs.search.value == '') {
            document.getElementById('count_result').innerHTML = '';
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
    
    myNavbar();
    getAllItems();
});



