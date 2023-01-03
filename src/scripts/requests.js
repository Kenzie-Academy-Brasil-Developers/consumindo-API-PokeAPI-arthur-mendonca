/* Monte a lógica das requisições aqui */

async function getPokemons(){

    const loading = document.querySelector(".loading")
    const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=500&offset=20`)

    .then (res => res.json()) 
    .catch(error => console.log(error))

    loading.classList.add("hidden")
    return pokemons
}

// --------------------------------------------------------

async function getPokemonByName(name){
    
    const listaDePokemons = await getPokemons()
    
    
    console.log(listaDePokemons.results)
    
    
    
    listaDePokemons.results.forEach(pokemon => { 
        const numeroNaPokedex = pokemon.url.slice(34,-1)
        // let pokemonID = listaDePokemons.results[numeroNaPokedex].name

        
        console.log(pokemon.name)
        if(  name == listaDePokemons.results[numeroNaPokedex].name)
        {
            ul.innerHTML = ""

            ul.insertAdjacentHTML("beforeend" ,`
            <li class = "card__container"> 
                <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name} >
            
            <h3>${pokemon.name}</h3>
            </li>
            `
            )
        }
    })

    
}

// ------------------------------------------------------------------ USAR O ADJACENT HTML NA FUNÇÃO ABAIXO; USAR A FUNÇÃO ACIMA APENAS PRA CAPTURAR O PKMN PELO NOME

function renderPkmnByName(){
    const searchInput = document.querySelector("input").value
    const button = document.querySelector("button")

    button.addEventListener("click", (element) => {
        
        getPokemonByName(searchInput.toLocaleLowerCase().trim())
    })

}

renderPkmnByName()

console.log(document.querySelector("input"))