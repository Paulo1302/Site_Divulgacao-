// src/contato.ts

export function renderizarContato(selector: string) {
  const secao = document.querySelector<HTMLElement>(selector);
  if (!secao) return;

  secao.innerHTML = `
    <h2 class="titulo-secao">Contatos e Localização</h2>
    <div class="contato-grid">
      <div class="contato-info">
        <div class="info-bloco">
          <strong>Endereço:</strong>
          <p>RUA Aurino Correa Lima, n°37, Centro, Glória do Goitá-PE</p>
        </div>
        <div class="info-bloco">
          <strong>WhatsApp:</strong>
          <p><a href="https://wa.me/5581999262736" target="_blank" class="link-whatsapp">+55 (81) 9 9926-2736</a></p>
        </div>
        <div class="info-bloco">
          <strong>E-mail:</strong>
          <p>pf59980@gmail.com</p>
        </div>
      </div>

      <div class="mapa-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.996786176928!2d-35.29372079999999!3d-7.999267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba99ca29440d5%3A0xbd2a7a3d14bcf02!2sFUNER%C3%81RIA%2021%20DE%20ABRIL!5e0!3m2!1spt-BR!2sbr!4v1769544857344!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style="border: 0;"
          allowfullscreen=""
          loading="lazy">
        </iframe>
      </div>
    </div>
  `;
}