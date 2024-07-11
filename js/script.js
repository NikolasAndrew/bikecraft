//ativar link do menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
    const url = location.href;
    const href = link.href;
    if (url.includes(href)){
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink);

//ativar links do orçamento

const parametros =  new URLSearchParams (location.search);

function ativarProdutos(parametro){
    const elemento = document.getElementById(parametro)
    if (elemento){
        elemento.checked = true
    }
}

parametros.forEach(ativarProdutos);

//Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaconteiner = document.querySelector(".bicicleta-imagens");

function trocarImagens(event){
    const img = event.currentTarget
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media){
        galeriaconteiner.prepend(img)
    }
    
    
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagens)
}

galeria.forEach(eventosGaleria);