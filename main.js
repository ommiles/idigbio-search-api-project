const inputEl = document.querySelector(`input`)

async function doSearch(event) {

    const searchTerm = inputEl.value
    const hintEl = document.querySelector(`.search-hint`)

    if (event.key = true){
        document.body.classList.remove('show-hint')
        hintEl.innerHTML = `Hit enter to search ${searchTerm}`
    }if (event.key === `Enter` && searchTerm.length > 2 && searchTerm.length < 13) {
        console.log(`Search for`, searchTerm)
        hintEl.innerHTML = `Hit Enter to Search ${searchTerm}`
        fetchStateEndangered()
    } else {
        document.body.classList.add('show-hint')
    }
    
    async function fetchStateEndangered() {
        const stateResponse = await fetch(`https://search.idigbio.org/v2/search/records/?rq={%22data.dwc:datasetName%22:%22Endangered%22}&{%22data.dwc:stateProvince%22:%22${searchTerm}%22}`)
        const stateResults = await stateResponse.json()
        const {items} = stateResults

        items.forEach(item =>{
            const ul = document.querySelector(`ul`)
            let li = document.createElement('li')
            li.innerHTML = item.indexTerms.specificepithet
            ul.appendChild(li)
            // console.log(li)
        })
    }
}

inputEl.addEventListener(`keyup`, doSearch)