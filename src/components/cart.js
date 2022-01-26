import { db } from '../mock/db.js'

class Cart{

    static adicionandoCart(idProduto){
        
        const produtoFiltrado = db.foods.find(function(produto){
            return produto.id == idProduto
        })
        
        db.carrinho.push(produtoFiltrado)
        Cart.atualizarCart(db.carrinho)
        Cart.criarQuantidadePreco()

    }

    static removendoCart(idProduto){

        const produtoFiltrado = db.carrinho.find(function(produto, index){
            return produto.id == idProduto
        })

        const index = db.carrinho.indexOf(produtoFiltrado)
        db.carrinho.splice(index, 1)
        this.atualizarCart(db.carrinho)
    }
    
    static criarQuantidadePreco(){

        if (!document.querySelector(".carrinho__quantidadeTotal") ){
            const aside        = document.querySelector(".carrinho")
            const divQuantidade = document.createElement('div')
            const divTotal      = document.createElement('div')
            const spanQuantidadeTotal = document.createElement('span')
            const spanPrecoTotal = document.createElement('span')
            divQuantidade.classList.add('carrinho__quantidade')
            divTotal.classList.add('carrinho__total')
            divQuantidade.innerText         = ('Quantidade')
            divTotal.innerText              = ('Total')
            spanQuantidadeTotal.classList.add('carrinho__quantidadeTotal')
            spanPrecoTotal.classList.add('carrinho__PrecoTotal')
            spanQuantidadeTotal.innerText   = " 0"
            spanPrecoTotal.innerText        = " R$ 00,00"
            divQuantidade.appendChild(spanQuantidadeTotal)
            divTotal.appendChild(spanPrecoTotal)
            aside.appendChild(divQuantidade)
            aside.appendChild(divTotal)
        }
    }

    static atualizarCart(produtos){
        const carrinho     = document.querySelector(".carrinho__bottom")
        carrinho.innerHTML = ""

        if (produtos.length === 0){

            carrinho.innerHTML = "<img src='src/assets/images/shopping-bag.png' alt='Ícone de uma bolsa vazia'> <h2>Ops!</h2> <p>Por enquanto não temos produtos no carrinho</p>"
            
        } else {
                produtos.forEach(produto => {

                    const {id, nome, preco, categoria, imagem} = produto
                    
                    //Criando os elementos
                    const li           = document.createElement('li')
                    const img          = document.createElement('img')
                    const div          = document.createElement('div')
                    const h1           = document.createElement('h1')
                    const divCategoria = document.createElement('div')
                    const spanPreco    = document.createElement('span')
                    const lixoImg      = document.createElement('img')
        
                    //Adicionando classes
                    li.classList.add('carrinho__card')
                    div.classList.add('carrinho__flex')
                    divCategoria.classList.add('carrinho__categoria')
                    lixoImg.classList.add('carrinho__excluir')
                    lixoImg.setAttribute('data-id', id)
        
                    //Adicionando event listener
                    lixoImg.addEventListener('click', e => {
        
                        const botaoRemover = e.target
                        const dataId = botaoRemover.getAttribute('data-id')
                        Cart.removendoCart(dataId, produtos)
                    })
        
                    //Adicionando conteúdo
                    img.setAttribute('src', imagem)
                    divCategoria.innerText = categoria
                    h1.innerText           = nome
                    spanPreco.innerText    = preco
                    lixoImg.setAttribute('src', 'src/assets/images/Icon_lixeira.png')
        
                    //Colocando dentro do html
                    carrinho.appendChild(li)
                    li.appendChild(img)
                    li.appendChild(div)
                    div.appendChild(h1)
                    div.appendChild(divCategoria)
                    div.appendChild(spanPreco)
                    li.appendChild(lixoImg)
                })
        }
    }
}

export{ Cart }