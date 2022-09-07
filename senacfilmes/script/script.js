const dados = [
    {
        titulo: 'Buzz',
        poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/wDnKL1eBkSkGGBK6WoQxZZVDCHU.jpg',
        nota: '8.0'
    },
    {
        titulo: 'Predador',
        poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg',
        nota: '7.5'
    },
    {
        titulo: 'Predador',
        poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg',
        nota: '7.5'
    }
]

function cadastrar(){
    console.log("cadastrar filme")
}

let filmes = document.querySelector("#filmes")
dados.forEach((filme) => filmes.appendChild(Card(filme)))

let botaoCadastrar = document.querySelector("#botao-cadastrar")
botaoCadastrar.addEventListener("click", cadastrar)

