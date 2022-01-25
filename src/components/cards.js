class Cards {
    static criarCards(ul){
        ul.innerHTML = ''

        for (let i = 0; i < 7; i++){

            //Criando os elementos
            const li          = document.createElement('li')
            const img         = document.createElement('img')
            const h1          = document.createElement('h1')
            const desc        = document.createElement('p')
            const div         = document.createElement('div')
            const preco       = document.createElement('span')
            const carrinhoImg = document.createElement('img')

            //Adicionando classes
            li.classList.add('vitrine__card')
            div.classList.add('vitrine__flex')

            //Adicionando conteúdo
            img.setAttribute('src', 'src/assets/images/Icon_fruits.png')
            h1.innerText = 'Nome do produto'
            desc.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            preco.innerText = 'R$ 49,90'
            carrinhoImg.setAttribute('src', 'src/assets/images/Icon_carrinho_verde.png')

            //Colocando dentro do html
            ul.appendChild(li)
            li.appendChild(img)
            li.appendChild(h1)
            li.appendChild(desc)
            li.appendChild(div)
            div.appendChild(preco)
            div.appendChild(carrinhoImg)

        }
    }
}

export {Cards}