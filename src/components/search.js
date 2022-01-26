import Cards from "./cards.js"
import db from "./../mock/db.js"

class Search{

    static searchProduct(){

        const imgPesquisar = document.querySelector(".pesquisar figure img")

        imgPesquisar.addEventListener('click', function(){

                const inputPesquisar = document.querySelector(".pesquisar input").value.toLowerCase()

                const produtosFiltrados = Search.filtrarAutomaticamente(inputPesquisar)
                
                if(inputPesquisar.length !== 0){
                    Cards.criarCards(produtosFiltrados)
                }else{
                    Cards.criarCards(db.foods)
                }

        })

        imgPesquisar.addEventListener('mouseenter', () => {
            imgPesquisar.setAttribute('src', 'src/assets/images/searchIconHover.png')
        })

        imgPesquisar.addEventListener('mouseout', () => {
            imgPesquisar.setAttribute('src', 'src/assets/images/searchIcon.png')
        })


        document.addEventListener("keypress", evt => {

            if(evt.key === "Enter"){

                const inputPesquisar = document.querySelector(".pesquisar input").value
                const produtosFiltrados = Search.filtrarAutomaticamente(inputPesquisar)

                if(inputPesquisar.length !== 0){
                    Cards.criarCards(produtosFiltrados)
                }else{
                    Cards.criarCards(db.foods)
                }

            }

        })

        const input = document.querySelector(".pesquisar input")

        input.addEventListener("keyup", function(event) {
            const busca = event.target.value

            const result = Search.filtrarAutomaticamente(busca)

            Cards.criarCards(result)
        })

    }

    static filtrarAutomaticamente(value){

        value = value.toLowerCase()

        const produtosFiltrados = db.foods.filter(produto => {
            if(produto.nome.toLowerCase().includes(value) || produto.categoria.toLowerCase().includes(value)){
                return produto
            }
            
        })

        return produtosFiltrados
    }

    static homeLogo(){

        const buttonLogo = document.querySelector(".logo img")

        buttonLogo.addEventListener("click", () => Cards.criarCards(db.foods))

    }

}

export default Search