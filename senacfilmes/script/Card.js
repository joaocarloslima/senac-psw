function Card (filme){

    let card = document.createElement("div")
    card.classList.add("card")

    let poster = document.createElement("img")
    poster.src = filme.poster
    poster.alt = "poster do filme " + filme.titulo

    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.innerHTML = filme.titulo

    let divNota = document.createElement("div")
    divNota.classList.add("nota")

    let icone = document.createElement("span")
    icone.classList.add("estrela")
    icone.classList.add("material-icons")
    icone.innerHTML = "star"

    let nota = document.createElement("span")
    nota.innerHTML = filme.nota

    divNota.appendChild(icone)
    divNota.appendChild(nota)

    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerHTML = "detalhes"

    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(divNota)
    card.appendChild(botao)

    return card

}