// src/main.ts
import './style.css';
import './cardsServices.css';
import './sobreEmpresa.css'; // Nova importação modular
import { renderizarCardsServicos } from './cardsServices';

// Inicia os serviços dinâmicos
renderizarCardsServicos('.grid-servicos');

// Lógica de Troca de Abas (Navegação)
const botoes = document.querySelectorAll<HTMLButtonElement>('.tab-link');
const secoes = document.querySelectorAll<HTMLElement>('.aba-conteudo');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const alvo = botao.getAttribute('data-alvo');

    botoes.forEach((b) => b.classList.remove('active'));
    secoes.forEach((s) => s.classList.remove('active'));

    botao.classList.add('active');

    const secaoAtiva = document.getElementById(alvo || '');
    if (secaoAtiva) {
      secaoAtiva.classList.add('active');
    }
  });
});