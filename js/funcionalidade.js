const cowboy = document.querySelector(".cowboy");
const cacto = document.querySelector(".cacto");

const jump = () => {
  cowboy.classList.add("jump"); 
  
  setTimeout(() => {
   cowboy.classList.remove("jump");
  }, 500);
} 

// A parada começa a dar errado aqui
const loop = setInterval(() => {

 const cactoPosition = cacto.offsetLeft;
 const cowboyPosition = window.getComputedStyle(cowboy).bottom.replace('px', '');

 console.log(cowboyPosition);

 if (cactoPosition <= 120 && cactoPosition > 0 && cowboyPosition< 70) {

  cacto.estilo.animation = 'none ';
  cacto.estilo.left = `${cactoAnimation}px`;
  
  cowboy.estilo.animation = 'none';
  cowboy.estilo.bottom = `${cowboyPosition}px`;

  cowboy.src = 'gustavoo-removebg-preview.png'

}

}, 10);

document.addEventListener('keydown', jump);
