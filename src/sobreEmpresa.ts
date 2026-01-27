// src/sobreEmpresa.ts

export const dadosEmpresa = {
    fundacao: 1940,
    geracao: "Segunda geração familiar",
    titulo: "Dignidade e Respeito desde 1940",
    subtitulo: "Segunda geração familiar dedicada ao amparo de sua família com humanidade e tradição.",
    historia: `Fundada em 1940, a Funerária 21 de Abril consolidou-se como um pilar de confiança em Glória do Goitá. 
               Hoje, sob a gestão da segunda geração da família, mantemos o compromisso de oferecer um suporte 
               integral e humanizado. O Santuário Paz nasceu com o propósito de ser um refúgio acolhedor nos momentos mais 
               difíceis, contando com salas climatizadas e atendimento especializado 24 horas.`,
    missao: `Com mais de 80 anos de história, compreendemos que o momento da despedida exige profunda empatia. 
             Nosso foco é garantir que cada família receba um atendimento que verdadeiramente entende a complexidade 
             e a dor da transição.`
};

export function renderizarSobre(containerSelector: string) {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    container.innerHTML = `
        <div class="banner">
            <h1>${dadosEmpresa.titulo}</h1>
            <p>${dadosEmpresa.subtitulo}</p>
        </div>
        <article>
            <h2>Nossa História</h2>
            <p>${dadosEmpresa.historia}</p>
            <h3>Compromisso e Tradição</h3>
            <p>${dadosEmpresa.missao}</p>
        </article>
    `;
}