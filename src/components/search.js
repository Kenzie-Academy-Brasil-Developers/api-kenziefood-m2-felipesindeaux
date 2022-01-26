import Cards from "./cards.js"
import db from "./../mock/db.js"

class Search{

    static searchProduct(){

        const imgPesquisar = document.querySelector(".pesquisar figure img")

        imgPesquisar.addEventListener('click', function(){

                const inputPesquisar = document.querySelector(".pesquisar input").value

                const produtosFiltrados = db.foods.filter((produto) => produto.categoria.toLowerCase() == inputPesquisar.toLowerCase())
                
                if(inputPesquisar.length !== 0){
                    Cards.criarCards(produtosFiltrados)
                }else{
                    Cards.criarCards(db.foods)
                }

        })

        document.addEventListener("keypress", evt => {

            if(evt.key === "Enter"){

                const inputPesquisar = document.querySelector(".pesquisar input").value
                const produtosFiltrados = db.foods.filter((produto) => produto.categoria.toLowerCase() == inputPesquisar.toLowerCase())

                if(inputPesquisar.length !== 0){
                    Cards.criarCards(produtosFiltrados)
                }else{
                    Cards.criarCards(db.foods)
                }

            }

        })

    }

    static homeLogo(){

        const buttonLogo = document.querySelector(".logo img")

        buttonLogo.addEventListener("click", () => Cards.criarCards(db.foods))

    }

}

export default Search