import './style.css';

const appDiv = document.getElementById('app');

const galeria = document.getElementById('galeria');
const quantidadeImagensIniciais = 1;
let controle = 0;
const carregarMais = document.getElementById('carregar-mais');
for (let i = 0; i < quantidadeImagensIniciais; i++) {
  galeria.innerHTML += `<img src="https://picsum.photos/400/250?random=+i+" />`;
}
carregarMais.addEventListener('click', () => {
  for (let i = 0; i < quantidadeImagensIniciais; i++) {
    const image = document.createElement('img');
    image.src = `https://picsum.photos/400/250?random=${controle}`;
    carregarMais.innerHTML = 'carregando...';
    image.addEventListener('load', () => {
      carregarMais.innerHTML = 'Carregar Mais!';
    });
    galeria.appendChild(image);
    controle++;
  }
});
