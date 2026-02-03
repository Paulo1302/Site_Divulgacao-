// src/sobreEmpresa.ts
import fachadaImg from "./img/sobre/fachada.jpg";
import veiculosImg from "./img/sobre/veiculos.jpg";
import interiorImg from "./img/sobre/interior.jpg";

export const dadosEmpresa = {
    titulo: "Dignidade e Respeito desde 1940",
    subtitulo: "Segunda geração familiar dedicada ao amparo de sua família com humanidade e tradição.",
    historia: `Fundada em 1940, a Funerária 21 de Abril consolidou-se como um pilar de confiança em Glória do Goitá. 
               Hoje, sob a gestão da segunda geração da família, mantemos o compromisso de oferecer um suporte 
               integral e humanizado. O Santuário Paz nasceu com o propósito de ser um refúgio acolhedor nos momentos mais 
               difíceis, contando com salas climatizadas e atendimento especializado 24 horas.`,
    missao: `Com mais de 80 anos de história, compreendemos que o momento da despedida exige profunda empatia. 
             Nosso foco é garantir que cada família receba um atendimento que verdadeiramente entende a complexidade 
             e a dor da transição.`,
    fachada: `Seguindo a mesma linha de integridade desde 1940, nossa fachada representa um legado de dedicação. Sua estrutura foi pensada 
              para garantir a discrição e o respeito solene que sua família merece, honrando a história que construímos ao longo dos anos.`,
    veiculos: `Contamos com uma frota moderna e própria composta por três veículos, oferecendo um serviço de transporte disponível 24h para 
                garantir que cada detalhe do traslado seja conduzido com agilidade e proteção absoluta.`,
    interior: `Nosso espaço interno reflete um acolhimento autêntico e rústico. Dispomos de um amplo mostruário de urnas no local, facilitando 
                a escolha da família em um ambiente espaçoso e naturalmente ventilado, focado na funcionalidade e no respeito ao momento.`
};

export function renderizarSobre(containerSelector: string) {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    container.innerHTML = `
        <div class="banner">
            <h1>${dadosEmpresa.titulo}</h1>
            <p>${dadosEmpresa.subtitulo}</p>
        </div>

        <article class="conteudo-descritivo">
            <h2>Nossa História</h2>
            <p>${dadosEmpresa.historia}</p>

            <h2>Compromisso e Tradição</h2>
            <p>${dadosEmpresa.missao}</p>

            <div class="bloco-anuncio">
                <h2>Tradição que Acolhe</h2>
                <p>${dadosEmpresa.fachada}</p>
                <img src="${fachadaImg}" alt="Fachada" class="img-sobre-projeto">
            </div>

            <div class="bloco-anuncio">
                <h2>Prontidão e Segurança</h2>
                <p>${dadosEmpresa.veiculos}</p>
                <img src="${veiculosImg}" alt="Veículos" class="img-sobre-projeto">
            </div>

            <div class="bloco-anuncio">
                <h2>O Conforto da Serenidade</h2>
                <p>${dadosEmpresa.interior}</p>
                <img src="${interiorImg}" alt="Interior" class="img-sobre-projeto">
            </div>
        </article>
    `;
}