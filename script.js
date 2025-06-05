let container = document.getElementById("container")
let searchBox = document.getElementById("searchBox")
let searchBtn = document.getElementById("searchBtn")

fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data =>{
    allCountries = data
    showCountries(data)
    console.log(data);
    
})

function showCountries(countries) {
        countries.forEach(element => {
        container.innerHTML +=`
        <div class="box">
            <div class="image">
                <img src="${element.flags.png}" alt="not available">
            </div>
            <div class="information">
                <p>Country: ${element.name.common}</p>
                <p>Population: ${element.population}</p>
                <p>Currency: ${element.currencies[Object.keys(element.currencies)[0]].name}</p>
                <p>Symbol: ${element.currencies[Object.keys(element.currencies)[0]].symbol}</p>
            </div>
        </div>`
    });
}

function searched() {
    let searchText = searchBox.value.toLowerCase()
    let returned = allCountries.filter(item=> item.name.common.toLowerCase().includes(searchText))
    console.log(returned);


    container.innerHTML = " "
    if(returned.length === 0){
        container.innerHTML = `<p> No Countries Found. </P>`;
        return;
    }
    
    returned.forEach(element => {
        container.innerHTML +=`
        <div class="box">
            <div class="image">
                <img src="${element.flags.png}" alt="not available">
            </div>
            <div class="information">
                <p>Country: ${element.name.common}</p>
                <p>Population: ${element.population}</p>
                <p>Currency: ${element.currencies[Object.keys(element.currencies)[0]].name}</p>
                <p>Symbol: ${element.currencies[Object.keys(element.currencies)[0]].symbol}</p>
            </div>
        </div>`
    });
}

searchBox.addEventListener("keydown", searched)
// searchBtn.addEventListener("click", searched)



