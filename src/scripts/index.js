/* Monte sua lógica aqui */

const ul = document.querySelector(".main__list")

async function createCard (){

    const listaDePokemons = await getPokemons()

    listaDePokemons.results.forEach(pokemon => {
        const numeroNaPokedex = pokemon.url.slice(34,-1)

        ul.insertAdjacentHTML("beforeend" ,`
        <li class = "card__container"> 
            <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name} >
        
        <h3>${pokemon.name}</h3>
        </li>
        `
        )
    })
}
createCard()


async function teste(){
    const listaDePokemons = await getPokemons()

    let resultado = listaDePokemons.results[0].name

    return console.log(resultado)

}

teste()

