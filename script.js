
let container = document.getElementById("container")
let searchBox = document.getElementById("searchBox")
let searchBtn = document.getElementById("searchBtn")
let regionBar = document.getElementById("regionBar")
let regionSlot = document.getElementById("regionSlot")

fetch("https://restcountries.com/v3.1/all?fields=name,flags,countries,population,region,currencies")
.then(response => response.json())
.then(data =>{
    allCountries = data
    showCountries(data)
    console.log(data);
    
})


function showCountries(countries) {
    

        countries.forEach(element => {
    let currencyKey = element.currencies ? Object.keys(element.currencies)[0] : 'NULL';
    let currencyName = currencyKey ? element.currencies[currencyKey].name : "N/A";
    let currencySymbol = currencyKey ? element.currencies[currencyKey].symbol : "N/A";
        container.innerHTML +=`
        <div class="box">
            <div class="image">
                <img src="${element.flags.png}" alt="not available">
            </div>
            <div class="information">
                <p>Country: ${element.name.common}</p>
                <p>Population: ${element.population}</p>
                <p>Currency: ${currencyName}</p>
                <p>Symbol: ${currencySymbol}</p>
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

            </div>
        </div>`
    });
}


// function region() {
//     container.innerHTML = ""
//     let getRegion = regionBar.value
//     fetch(`https://restcountries.com/v3.1/region/${getRegion}`)
//     .then(response => response.json())
//     .then(data => {
        
//         regionSlot.innerHTML = `<h1>THE ${getRegion.toUpperCase()} COUNTRIES`

//         data.forEach(element =>{
//             let currencyKey = element.currencies ? Object.keys(element.currencies)[0] : null;
//             let currencyName = currencyKey ? element.currencies[currencyKey].name : "N/A";
//             let currencySymbol = currencyKey ? element.currencies[currencyKey].symbol : "N/A";
//             container.innerHTML +=`
//             <div class="box">
//             <div class="image">
//                 <img src="${element.flags.png}" alt="not available">
//             </div>
//             <div class="information">
//                 <p>Country: ${element.name.common}</p>
//                 <p>Population: ${element.population}</p>
//                 <p>Currency: ${currencyName}</p>
//                 <p>Symbol: ${currencySymbol}</p>
//             </div>
//         </div>`
            
            
//         })
//     })
// }

searchBox.addEventListener("keydown", searched)
searchBtn.addEventListener("click", searched)
regionBar.addEventListener("change", region)

