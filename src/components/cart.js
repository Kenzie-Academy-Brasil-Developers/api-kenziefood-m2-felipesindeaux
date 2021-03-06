import db from '../mock/db.js'

class Cart{

    static adicionandoCart(idProduto){
        
        const produtoClicado = db.foods.find(produto => produto.id == idProduto)
        
        db.carrinho.push(produtoClicado)
        Cart.criarFooterCarrinho()
        Cart.atualizarCart(db.carrinho)
        

    }

    static removendoCart(idProduto){

        const produtoClicado = db.carrinho.find((produto) => produto.id == idProduto)

        const index = db.carrinho.indexOf(produtoClicado)

        db.carrinho.splice(index, 1)
        this.atualizarCart(db.carrinho)
        
        if (db.carrinho.length === 0){
            document.querySelector('.carrinho__footer').innerHTML = ""
        }
    }
    
    static criarFooterCarrinho(){
        const carrinhoFooter = document.querySelector('.carrinho__footer')

        if (!document.querySelector(".carrinho__quantidadeTotal") ){
            //Criando os elementos
            const aside                     = document.querySelector(".carrinho")
            const divQuantidade             = document.createElement('div')
            const divTotal                  = document.createElement('div')
            const spanQuantidadeTotal       = document.createElement('span')
            const spanPrecoTotal            = document.createElement('span')
            const spanQuantidade            = document.createElement('span')
            const spanPreco                 = document.createElement('span')

            //Adicionando classes
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
        document.querySelector('.carrinho__quantidadeTotal').innerText = db.carrinho.length
    }

    static atualizarTotal(produtos){
        const spanPrecoTotal = document.querySelector('.carrinho__PrecoTotal')

        const total = produtos.reduce((total, produto) => total + produto.preco, 0)

        let valorTotal = total.toLocaleString('pt-BR', {
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
            carrinho.style.backgroundColor = 'var(--color-grey-1)';
            carrinho.innerHTML = "<img src='src/assets/images/shopping-bag.png' alt='Ícone de uma bolsa vazia'> <h2>Ops!</h2> <p>Por enquanto não temos produtos no carrinho</p>"
            
        } else {

            carrinho.style.backgroundColor = 'white';

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
        Cart.atualizarQuantidade()
        Cart.atualizarTotal(db.carrinho)
    }
}

export default Cart