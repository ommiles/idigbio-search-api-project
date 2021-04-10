const endangered_url = `https://search.idigbio.org/v2/search/records/?rq={%22data.dwc:datasetName%22:%22Endangered%22}`

async function fetchEndangered() {
    const response = await fetch(endangered_url)
    const results = await response.json()
    const {items} = results
    console.log(results)

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