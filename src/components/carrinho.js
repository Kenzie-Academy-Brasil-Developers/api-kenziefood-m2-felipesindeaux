class Carrinho{
    static criarCarrinho(produtos){

        const carrinho     = document.querySelector(".carrinho__bottom")
        carrinho.innerHTML = ""

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

            //Adicionando conteúdo
            img.setAttribute('src', produtos.imagem)
            divCategoria.innerText = produtos.categoria
            h1.innerText           = produtos.nome
            spanPreco.innerText    = produtos.preco
            lixoImg.setAttribute('src', 'src/assets/images/Icon_lixeira.png')

            //Colocando dentro do html
            carrinho.appendChild(li)
            li.appendChild(img)
            li.appendChild(div)
            div.appendChild(h1)
            div.appendChild(divCategoria)
            div.appendChild(spanPreco)
            li.appendChild(lixoImg)
            
    }
}

export{Carrinho}