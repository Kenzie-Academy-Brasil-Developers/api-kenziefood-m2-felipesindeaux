import {Cards} from "./cards.js"
import {db} from "./../mock/db.js"

class Filtros {

    // Filtro Todos
    static filtroTodos(){

        const buttonTodos = document.querySelector("#botao--todos")
        buttonTodos.addEventListener("click", e => {

            Cards.criarCards(db.foods)

        })
    }

    // Filtro Panificadora
    static filtroPanificadora(){

        const buttonPanificadora = document.querySelector("#botao--panificadora")
        
        buttonPanificadora.addEventListener("click", e => {
            
            const botaoFiltar = e.target
            if(botaoFiltar.tagName === "BUTTON"){

                const valuePanificadora = document.querySelector("#botao--panificadora").value
                const mostrarPesquisa = db.foods.filter(function(produtos){

                    return (
                        produtos.categoria.toLowerCase() == valuePanificadora.toLowerCase()
                    )

                })
                
                Cards.criarCards(mostrarPesquisa)
                
            }
        })
    }

    // Filtro Frutas
    static filtroFrutas(){

        const buttonFrutas = document.querySelector("#botao--frutas")
        
        buttonFrutas.addEventListener("click", e => {
            
            const botaoFiltar = e.target
            if(botaoFiltar.tagName === "BUTTON"){

                const valueFrutas = document.querySelector("#botao--frutas").value
                const mostrarPesquisa = db.foods.filter(function(produtos){

                    return (
                        produtos.categoria.toLowerCase() == valueFrutas.toLowerCase()
                    )

                })
                
                Cards.criarCards(mostrarPesquisa)
                
            }
        })
    }

    // Filtro Bebidas
    static filtroBebidas(){

        const buttonBebidas = document.querySelector("#botao--bebidas")
        
        buttonBebidas.addEventListener("click", e => {
            
            const botaoFiltar = e.target
            if(botaoFiltar.tagName === "BUTTON"){

                const valueBebidas = document.querySelector("#botao--bebidas").value
                const mostrarPesquisa = db.foods.filter(function(produtos){

                    return (
                        produtos.categoria.toLowerCase() == valueBebidas.toLowerCase()
                    )

                })
                
                Cards.criarCards(mostrarPesquisa)
                
            }
        })
    }

}

export{Filtros}