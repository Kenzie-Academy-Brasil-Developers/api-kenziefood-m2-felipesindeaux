import {Cart} from "./Cart.js"
import { db } from "../mock/db.js"

class AddCart{
    static cart(){
        
        //Adicionando click
        const botaoAdd = document.getElementsByClassName("vitrine__flex__img")
        console.log(botaoAdd)
        botaoAdd.addEventListener("click", e => {

            const botaoAdicionar = e.target;
            const idProduto = botaoAdicionar.getAtribute("data-id")
            adicionandoCart(idProduto)

        })
    }

    //Adicionando ao carrinho
    static adicionandoCart(idProduto){

        const adicionarProduto = db.foods.find(function(e){
            return e.id === idProduto
        })

        db.carrinho.push(adicionarProduto)
        Cart.criarCart(db.carrinho)

    }
}

export{AddCart}