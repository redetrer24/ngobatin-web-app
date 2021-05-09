import {resultSearch, search, resultList} from './component/resultSearch.js';

const searchStates = async searchText => {
    const res    = await fetch('../../data/alldata.json');
    const states = await res.json();

    let result = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.title.match(regex) || state.price.match(regex);
    });

    if(searchText.length === 0) {
        result = [];
        resultList.innerHTML = '';
        document.getElementById('count_result').innerHTML = '';
    }else if(result.length == 0){
        result = [];
        resultList.innerHTML = `<h3> Hasil pencarian '${searchText}' tidak di temukan </h3>`;
        document.getElementById('count_result').innerHTML = '';
    }           

    resultSearch(result);
};

export default searchStates;