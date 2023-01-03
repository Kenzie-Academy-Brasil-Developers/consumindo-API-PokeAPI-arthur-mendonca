/* Monte a lógica das requisições aqui */

async function getPokemons(){

    const loading = document.querySelector(".loading")
    const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=500&offset=20`)

    .then (res => res.json())

    .catch(error => console.log(error))

    loading.classList.add("hidden")
    return pokemons
}





async function renderPkmnByName(){
    const searchInput = document.querySelector("#poke__input")
    const button = document.querySelector("button")

    

    button.addEventListener("click", async (element) => {
        element.preventDefault
        if(searchInput.value == ""){
            createCard()
        } else{

        const pokemonPesquisado = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput.value.toLowerCase().trim()}`)

        .then(res => res.json())
        .catch(error => console.log(error))
        ul.innerHTML = ""
        ul.insertAdjacentHTML("beforeend" ,`
        <li class = "card__container"> 
            <img src = ${pokemonPesquisado.sprites.front_default} alt=${pokemonPesquisado.name} class = "img__search">
        
        <h3>${pokemonPesquisado.name}</h3>
        </li>
        `
        )
    }
    
    })  
}

renderPkmnByName()



function showStartScreen(){
    button = document.querySelector("#start")

    button.addEventListener("click", (e) =>{
        e.preventDefault
        createCard()
    })
}

showStartScreen()
