import './style.css';
import './cardsServices.css';
import './sobreEmpresa.css';
import { renderizarCardsServicos } from './cardsServices';
import { renderizarSobre } from './sobreEmpresa';
import { renderizarContato } from './contatoEmpresa';

// Renderiza conteúdos dinâmicos
renderizarSobre('#sobre');
renderizarCardsServicos('.grid-servicos');
renderizarContato('#contato');

// Seleção de elementos
const botoes = document.querySelectorAll<HTMLButtonElement>('.tab-link');
const secoes = document.querySelectorAll<HTMLElement>('.aba-conteudo');

// Função para ativar aba com animação e scroll
function ativarAba(idAlvo: string) {
  botoes.forEach((b) => b.classList.remove('active'));
  secoes.forEach((s) => {
    s.classList.remove('active');
    s.classList.remove('fade-in');
  });

  const botao = document.querySelector<HTMLButtonElement>(
    `.tab-link[data-alvo="${idAlvo}"]`,
  );
  const secao = document.getElementById(idAlvo);

  if (!botao || !secao) return;

  botao.classList.add('active');
  secao.classList.add('active');
  secao.classList.add('fade-in');

  secao.scrollIntoView({ behavior: 'smooth' });
}

// Navegação pelos botões
botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const alvo = botao.getAttribute('data-alvo');
    if (!alvo) return;
    ativarAba(alvo);
  });
});

// Clique nos cards -> ir para aba de contato
const cards = document.querySelectorAll<HTMLAnchorElement>('.card-servico');

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    event.preventDefault();
    ativarAba('contato');
  });
});