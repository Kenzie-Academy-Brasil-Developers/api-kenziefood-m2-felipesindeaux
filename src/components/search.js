import {Cards} from "./cards.js"
import {db} from "./../mock/db.js"

class Search{
    static searchProduct(){

        const imgPesquisar = document.querySelector(".pesquisar figure img")

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
    }
}

export{
    Search
}