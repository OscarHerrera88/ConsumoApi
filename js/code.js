let url_api = "https://pokeapi.co/api/v2/pokemon/";
let api_pokemon = fetch(url_api)


api_pokemon.then(res => res.json())
    .then(data_api => {
        let data1 = data_api.results
        data1.forEach(urlPoke1 => {
            let consumirApi = urlPoke1.url


            let consumirApi2 = fetch(consumirApi)
            consumirApi2.then(res => res.json())
                .then(data2 => {
                    console.log(data2)
                    let urlPoke2 = data2.abilities[1].ability.url

                    let consumirApi3 = fetch(urlPoke2)
                    consumirApi3.then(res => res.json())
                        .then(data3 => {
                            console.log(data3)
                            let cartas = document.querySelector("#poke")
                            cartas.innerHTML += `

                        <div class="card-group">
                            <div class="card ">
                            <img src="${data2.sprites.other.dream_world.front_default}" class=" mt-4 w-50 align-items-center  card-img-top-50  " with= alt="...">
                            <div class="card-body">
                                <h5 class="nombre card-title text-light bg-primary opacity-75 text-center text-uppercase"> ${data2.name}</h5>
                                <p class="card-text lang">${data3.effect_entries[1].effect}</p>
                            </div>
                            </div>
                            </div>
                            `
                        })
                })
        })
    })

    // buscador

    let buscador = document.querySelector("#buscar")
    buscador.addEventListener("click", () => {
    let inputYoTeElijo = document.querySelector("#YoTeElijo").value
    let url_api = "https://pokeapi.co/api/v2/pokemon/" + inputYoTeElijo;
    let consumirApi2 = fetch(url_api)
    consumirApi2.then(res => res.json())
    .then(data3 => {
    let urlPoke2 = data3.abilities[1].ability.url
    console.log(urlPoke2)
    let consumirApi3 = fetch(urlPoke2)
    consumirApi3.then(res => res.json())
    .then(data3 => {
    let cards = document.querySelector("#poke")
    cards.innerHTML = `
    <div class="col-3  mb-3 justify-content-center  text-center">
    <div class="card align-items-center">
    <img src="${data2.sprites.other.dream_world.front_default}" class="card-img-top w-50 justify-content-center align-items-center" alt=""">
    <div class="cardbody">
    <h5 class="card-title">${data2.name}</h5>
    <p class="card-text">Efecto 1: ${data3.effect_entries[0].effect}</p>
    <p class="card-text">Efecto 2: ${data3.effect_entries[1].effect}</p>
    </div>
    </div>
    </div>
    `
                    })
            })
    });



let offset = 0
    document.querySelector ("#anterior").addEventListener("click", () => {
    offset = offset - 0
    let url_api2 = "https://pokeapi.co/api/v2/pokemon/?offset" + offset + "&limit=20"   
    consumoDeApi(url_api2)
    
}) 
document.querySelector("#siguiente").addEventListener("click", () =>{
    offset = offset + 20
    let url_api2 = "https://pokeapi.co/api/v2/pokemon/?offset" + offset + "&limit=20"
    consumoDeApi(url_api2)
})