import showItems from './component/items.js';

const getSelectItem = () => {
    let selector = document.getElementById('selector').value;
    let BASE_URL = `../../data/${selector}.json`;
    return BASE_URL;
}

let BASE_URL = getSelectItem();

const fetchAPI = url => {
    return fetch(url)
    .then(res => {
        if (res.status !== 200) {
            console.log("Error: " + res.status);
            return Promise.reject(new Error(res.statusText))
        } else {
            return Promise.resolve(res)
        }
    })
    .then(res => res.json())
    .catch(error => {
        console.log(error);
    });
};

function getAllItems() {
    fetchAPI(BASE_URL)
        .then(data => {
            showItems(data);
        })
        .catch(error => {
            console.log(error)
        })
}

document.getElementById('selector').addEventListener("change", ()=>{
    const itemsElement = document.getElementById('selectedItem');
    itemsElement.innerHTML = '';
    BASE_URL = getSelectItem();
    getAllItems();
});

export default getAllItems;
