import { Cards } from "./cards.js"
import { db } from "./../mock/db.js"

class Filtros {

    static filtroTodos(){

        const buttonTodos = document.querySelector("#botao--todos")
        buttonTodos.addEventListener("click", () => Cards.criarCards(db.foods))
        
    }

    static filtroPanificadora(){

        const buttonPanificadora = document.querySelector("#botao--panificadora")
        
        buttonPanificadora.addEventListener("click", () => {

                const produtosFiltrados = db.foods.filter((produto) => produto.categoria.toLowerCase() == buttonPanificadora.value.toLowerCase())
                
                Cards.criarCards(produtosFiltrados)
                
        })
    }

    static filtroFrutas(){

        const buttonFrutas = document.querySelector("#botao--frutas")
        
        buttonFrutas.addEventListener("click", () => {
 
                const produtosFiltrados = db.foods.filter((produto) => produto.categoria.toLowerCase() == buttonFrutas.value.toLowerCase())

                Cards.criarCards(produtosFiltrados)
                
        })

    }

    static filtroBebidas(){

        const buttonBebidas = document.querySelector("#botao--bebidas")
        
        buttonBebidas.addEventListener("click", () => {

                const produtosFiltrados = db.foods.filter((produtos) => produtos.categoria.toLowerCase() == buttonBebidas.value.toLowerCase())

                Cards.criarCards(produtosFiltrados)

        })

    }

}

export{ Filtros }