import Cart from './cart.js'

class Cards {
    static criarCards(produtos){
        
        const ul = document.querySelector('.vitrine__cards')
        ul.innerHTML = ''
        
        produtos.forEach(produto => {
            
            const {id, nome, preco, categoria, descricao, imagem} = produto

            //Criando os elementos
            const li            = document.createElement('li')
            const img           = document.createElement('img')
            const imgCategoria  = document.createElement('img')
            const spanCategoria = document.createElement('span')
            const divCategoria  = document.createElement('div')
            const h1            = document.createElement('h1')
            const desc          = document.createElement('p')
            const div           = document.createElement('div')
            const spanPreco     = document.createElement('span')
            const carrinhoImg   = document.createElement('img')

            //Adicionando classes
            li.classList.add('vitrine__card')
            div.classList.add('vitrine__flex')
            img.classList.add('vitrine__img')
            carrinhoImg.classList.add('vitrine__flex__img')
            divCategoria.classList.add('vitrine__categoria')

            //Adicionando conteúdo
            img.setAttribute('src', imagem)
            spanCategoria.innerText = categoria
            imgCategoria.setAttribute('src', `src/assets/images/Icon_${categoria}.png`)
            h1.innerText = nome
            desc.innerText = descricao
            spanPreco.innerText = `R$ ${preco.toFixed(2)}`
            carrinhoImg.setAttribute('src', 'src/assets/images/Icon_carrinho_verde.png')
            carrinhoImg.setAttribute('data-id', id)

            //Adicionando Events Listener
            carrinhoImg.addEventListener('click', e => {

                const botaoAdicionar = e.target
                const dataId = botaoAdicionar.getAttribute('data-id')
                Cart.adicionandoCart(dataId)

            })

            carrinhoImg.addEventListener('mouseenter', () => {

                carrinhoImg.setAttribute('src', 'src/assets/images/Icon_carrinho_verde_hover.png')

            })

            carrinhoImg.addEventListener('mouseout', () => {

                carrinhoImg.setAttribute('src', 'src/assets/images/Icon_carrinho_verde.png')

            })

            //Colocando dentro do html
            ul.appendChild(li)
            li.appendChild(divCategoria)
            li.appendChild(img)
            divCategoria.appendChild(imgCategoria)
            divCategoria.appendChild(spanCategoria)
            li.appendChild(h1)
            li.appendChild(desc)
            li.appendChild(div)
            div.appendChild(spanPreco)
            div.appendChild(carrinhoImg)
        
        })
        
    }
}

export default Cards