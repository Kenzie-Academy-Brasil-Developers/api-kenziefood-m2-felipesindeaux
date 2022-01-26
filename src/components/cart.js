import db from '../mock/db.js'

class Cart{

    static adicionandoCart(idProduto){
        
        const produtoFiltrado = db.foods.find(function(produto){
            return produto.id == idProduto
        })
        
        db.carrinho.push(produtoFiltrado)
        Cart.atualizarCart(db.carrinho)

    }

    static removendoCart(idProduto){

        const produtoFiltrado = db.carrinho.find(function(produto, index){
            return produto.id == idProduto
        })

        const index = db.carrinho.indexOf(produtoFiltrado)
        db.carrinho.splice(index, 1)
        this.atualizarCart(db.carrinho)


    }

    static atualizarCart(produtos){

        const carrinho     = document.querySelector(".carrinho__bottom")
        carrinho.innerHTML = ""

        if (produtos.length === 0){

            carrinho.removeAttribute('id')
            carrinho.innerHTML = "<img src='src/assets/images/shopping-bag.png' alt='Ícone de uma bolsa vazia'> <h2>Ops!</h2> <p>Por enquanto não temos produtos no carrinho</p>"
            
        } else {

            produtos.forEach(produto => {

                const {id, nome, preco, categoria, imagem} = produto
                
                carrinho.id = 'carrinho__cheio'


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
                img.classList.add("carrinho__img")
                lixoImg.classList.add("carrinho__excluir")
                lixoImg.setAttribute('data-id', id)
    
                //Adicionando event listener
                lixoImg.addEventListener('click', e => {
    
                    const botaoRemover = e.target
                    const dataId = botaoRemover.getAttribute('data-id')
                    Cart.removendoCart(dataId)
                })
    
                

                //Adicionando conteúdo
                img.setAttribute('src', imagem)
                divCategoria.innerText = categoria
                h1.innerText           = nome
                spanPreco.innerText    = `R$ ${preco.toFixed(2)}`
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

export default Cart