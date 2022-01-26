import db from '../mock/db.js'

class Cart{

    static adicionandoCart(idProduto){
        
        const produtoFiltrado = db.foods.find(function(produto){
            return produto.id == idProduto
        })
        
        db.carrinho.push(produtoFiltrado)
        Cart.atualizarCart(db.carrinho)
        Cart.criarQuantidadePreco()
        Cart.atualizarQuantidade()
        Cart.atualizarTotal(db.carrinho)
    }

    static removendoCart(idProduto){

        const produtoFiltrado = db.carrinho.find(function(produto, index){
            return produto.id == idProduto
        })

        const index = db.carrinho.indexOf(produtoFiltrado)
        db.carrinho.splice(index, 1)
        this.atualizarCart(db.carrinho)
        Cart.atualizarQuantidade()
        Cart.atualizarTotal(db.carrinho)
        if (db.carrinho.length === 0){
            Cart.removerFooterCarrinho()  
        }
    }
    
    static criarQuantidadePreco(){
        const carrinhoFooter = document.querySelector('.carrinho__footer')

        if (!document.querySelector(".carrinho__quantidadeTotal") ){
            //Criando os elementos
            const aside                     = document.querySelector(".carrinho")
            // const carrinhoFooter            = document.createElement('div')
            const divQuantidade             = document.createElement('div')
            const divTotal                  = document.createElement('div')
            const spanQuantidadeTotal       = document.createElement('span')
            const spanPrecoTotal            = document.createElement('span')
            const spanQuantidade            = document.createElement('span')
            const spanPreco                 = document.createElement('span')

            //Adicionando classes
            // carrinhoFooter.classList.add('carrinho__footer')
            divQuantidade.classList.add('carrinho__quantidade')
            divTotal.classList.add('carrinho__total')
            spanQuantidadeTotal.classList.add('carrinho__quantidadeTotal')
            spanPrecoTotal.classList.add('carrinho__PrecoTotal')
            
            //Adicionando conteúdo
            spanQuantidade.innerText        = ('Quantidade')
            spanPreco.innerText             = ('Total')

            //Colocando dentro do html
            aside.appendChild(carrinhoFooter)
            divQuantidade.appendChild(spanQuantidade)
            divTotal.appendChild(spanPreco)
            divQuantidade.appendChild(spanQuantidadeTotal)
            divTotal.appendChild(spanPrecoTotal)
            carrinhoFooter.appendChild(divQuantidade)
            carrinhoFooter.appendChild(divTotal)
        }
    }

    static atualizarQuantidade(){
        const spanQuantidadeTotal = document.querySelector('.carrinho__quantidadeTotal')
        spanQuantidadeTotal.innerText = db.carrinho.length        
    }

    static removerFooterCarrinho(){
        const carrinhoFooter = document.querySelector('.carrinho__footer')
        carrinhoFooter.innerHTML = ""
    }

    static atualizarTotal(produtos){
        const spanPrecoTotal = document.querySelector('.carrinho__PrecoTotal')

        const total = produtos.reduce(function(total, produto){
            return total + produto.preco
        },0)

        let valorTotal = parseFloat(total.toFixed(2)).toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2
            });
        
        spanPrecoTotal.innerText = `R$ ${valorTotal}`
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
            if (db.carrinho.length === 0){
                Cart.removerFooterCarrinho()  
            }
        }
        
    }
}

export default Cart