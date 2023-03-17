/*
    OBJETIVO: quando clicarmos no botão, deve modificar a imagem de fundo da tela correspondente
    
    Uma série de passos é 1 algorítmo

    Passo 1 - dar um jeito de pegar o elemento HTML dos botões;
    Passo 2 - dar um jeito de identificar o clique do usuário no botão;
    Passo 3 - desmarcar o botão selecionado anterior;
    Passo 4 - marcar o botão clicado como se estivesse selecionado;
    Passo 5 - esconder a imagem anterior;
    Passo 6 - fazer aparecer a imagem correspondente ao botão clicado;
*/

//  Passo 1 - dar um jeito de pegar o elemento HTML dos botões;
const slideButton = document.querySelectorAll('.slide-button');
const image = document.querySelectorAll('.image');

//  Passo 2 - dar um jeito de identificar o clique do usuário no botão;
slideButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        
        disableSelectedButton();

        selectCarouselButton(button);

        hideActiveImage();

        showBackgroundImage(index);
    })
})
function showBackgroundImage(index) {
    image[index].classList.add('active');
}

function hideActiveImage() {
    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active');
}

function selectCarouselButton(button) {
    button.classList.add('selected');
}

function disableSelectedButton() {
    const selectedButton = document.querySelector('.selected');
    selectedButton.classList.remove('selected');
}

