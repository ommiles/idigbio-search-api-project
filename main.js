const inputEl = document.querySelector(`input`)
const clearEl = document.querySelector(`a`)
const hintEl = document.querySelector(`.search-hint`)
const searchEl = document.getElementsByClassName(`search-input`)
const ul = document.querySelector(`ul`)
const divEl = document.getElementsByTagName(`sidebar`)

const toggleLoading = state => {
    if (state) {
        document.body.classList.remove(`loading`)
        document.body.classList.add('show-hint')
    } else {
        document.body.classList.add(`loading`)
        document.body.classList.remove('show-hint')
    }
    console.log(`Loading State is:`, state)
}

const clearSearch = () => {
    hintEl.innerHTML = ``
    ul.innerHTML = ``
}

async function doSearch(event) {

    const searchTerm = inputEl.value
    toggleLoading(true)

    if (event.key = true){
        hintEl.innerHTML = `Hit Enter to Search ${searchTerm}`
    }if (event.key === `Enter` && searchTerm.length > 2 && searchTerm.length < 14) {
        console.log(`Search for`, searchTerm)
        hintEl.innerHTML = `Hit Enter to Search ${searchTerm}`
        toggleLoading(false)
        fetchStateEndangered()
    } else {
        toggleLoading(true)
        document.body.classList.add('show-hint')
    }
    
    async function fetchStateEndangered() {

        const stateResponse = await fetch(`https://search.idigbio.org/v2/search/records/?rq={%22data.dwc:datasetName%22:%22Endangered%22}&{%22data.dwc:stateProvince%22:%22${searchTerm}%22}`)
        const stateResults = await stateResponse.json()
        const {items} = stateResults

        items.forEach(item =>{

            let li = document.createElement('li')
            li.className = `list` 
            let plantName = item.indexTerms.specificepithet
            
            function capitalizeFirstLetter(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
            
            li.innerHTML = capitalizeFirstLetter(plantName)
            ul.appendChild(li)
        })
    }
}

document.addEventListener(`keyup`, event => {
    if(event.key === `Escape`) {
        clearSearch()
    }
})

toggleLoading(false)
inputEl.addEventListener(`keyup`, doSearch)
clearEl.addEventListener(`click`, clearSearch)