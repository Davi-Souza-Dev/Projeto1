const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const containerSlides = document.getElementById('containerSlides');
const slide = [...document.querySelectorAll('slide')];


//Verifica o slide atual
const verificarAtual = () =>{
    const slideAtual = [...document.querySelectorAll('.foco')];
    return slideAtual[0];
};

const criarSlideNext = () =>{
    const primeiroSlide = containerSlides.firstElementChild;
    primeiroSlide.remove();
    containerSlides.appendChild(primeiroSlide);
}

const criarSlidePrev = ()=>{
    const primeiroSlide = containerSlides.firstElementChild;
    const ultimoSlide = containerSlides.lastElementChild;
    containerSlides.insertBefore(ultimoSlide,primeiroSlide);
}

btnNext.addEventListener('click',(evt)=>{
    const slideAtual = verificarAtual();
    const proximoSlide = slideAtual.nextElementSibling;
    proximoSlide.classList.toggle('foco');
    slideAtual.classList.remove('foco');
    criarSlideNext();
});

btnPrev.addEventListener('click',(evt)=>{
    const slideAtual = verificarAtual();
    let slideAnterior = slideAtual.previousElementSibling;
    if(slideAnterior == null){
        criarSlidePrev();
        slideAnterior = slideAtual.previousElementSibling;;
    }
    console.log(slideAnterior)
    slideAnterior.classList.toggle('foco');
    slideAtual.classList.remove('foco');
    criarSlidePrev();
});


//Menu 
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}