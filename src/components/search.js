import {Cards} from "./cards.js"
import {db} from "./../mock/db.js"

class Search{

    // Barra de pesquisa
    static searchProduct(){

        const imgPesquisar = document.querySelector(".pesquisar figure img")

        // Pesquisando a partir do click na lupa
        imgPesquisar.addEventListener('click', function(e){

            const botaoAdicionar = e.target
            if(botaoAdicionar.tagName === "IMG"){

                const inputPesquisar = document.querySelector(".pesquisar input").value
                const mostrarPesquisa = db.foods.filter(function(produtos){

                    return (
                        produtos.categoria.toLowerCase() == inputPesquisar.toLowerCase()
                    )

                })
                
                if(inputPesquisar.length !== 0){
                    Cards.criarCards(mostrarPesquisa)
                }else{
                    Cards.criarCards(db.foods)
                }
        
            }
            
        })

        // Pesquisando a partir do enter
        document.addEventListener("keypress", e => {

            if(e.key === "Enter"){

                const inputPesquisar = document.querySelector(".pesquisar input").value
                const mostrarPesquisa = db.foods.filter(function(produtos){

                    return (
                        produtos.categoria.toLowerCase() == inputPesquisar.toLowerCase()
                    )

                })

                if(inputPesquisar.length !== 0){
                    Cards.criarCards(mostrarPesquisa)
                }else{
                    Cards.criarCards(db.foods)
                }
            }
        })


    }

    // Voltar para Home pelo logo
    static homeLogo(){

        const buttonLogo = document.querySelector(".logo img")

        buttonLogo.addEventListener("click", e => {

            Cards.criarCards(db.foods)

        })
    }
}

export{
    Search
}