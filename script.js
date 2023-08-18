
let searchBtn = document.getElementById("search-btn");


searchBtn.addEventListener("click", async()=>{
let inp = document.querySelector(" .box input");    
let CountryName=inp.value ;
try{let url = `https://restcountries.com/v3.1/name/${CountryName}?fullText=true`;
let res = await fetch(url);
let data = await res.json();
let resul = document.querySelector(".result");
let a=Object.values(data[0].currencies);
let b =Object.values(a[0]);
resul.innerHTML=
    `<img src="${data[0].flags.png}">
    <h2>Area Code: ${data[0].area} </h2>
    <h2>Capital: ${data[0].capital[0]} </h2>
    <h2>Continents: ${data[0].continents[0]} </h2>
    <h2>Population: ${data[0].population} </h2>
    <h2>Languages: ${Object.values(data[0].languages)} </h2>
    <h2>Currency: ${Object.keys(data[0].currencies)}
    - ${b[0]}</h2>
    <h2>Currency Symbol: ${b[1]} </h2>
    `
console.log(data[0]);

}
catch(e){
    console.log(e);
}
inp = "" ;    
})