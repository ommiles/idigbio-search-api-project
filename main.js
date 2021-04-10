const endangered_url = `https://search.idigbio.org/v2/search/records/?rq={%22data.dwc:datasetName%22:%22Endangered%22}`

// https://search.idigbio.org/v2/search/records/?rq=%7B%22data.dwc:datasetName%22%3A+%22Endangered%22%7D

// const state_url = `https://search.idigbio.org/v2/search/records/?rq={%22data.dwc:stateProvince%22:%22Kansas%22}`

async function fetchEndangered() {
    const response = await fetch(endangered_url)
    const results = await response.json()
    console.log(results)
    const {items} = results
    // const itemArray = Object.keys(items)

    const ul = document.querySelector(`ul`)

    items.forEach(item =>{
        let li = document.createElement('li')
        li.innerHTML = item.indexTerms.specificepithet
        ul.appendChild(li)
    })

    console.log(items);
}

document.addEventListener('DOMContentLoaded', function() {
    fetchEndangered()
}); 

// OBJECT KEYS, TURNING OBJECTS INTO ARRAYS


// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// const propertyNames = Object.keys(person);

// console.log(propertyNames);

// JSON PARSE

// const json = '{ "fruit": "pineapple", "fingers": 10 }';
// const obj = JSON.parse(json);
// console.log(obj.fruit, obj.fingers);