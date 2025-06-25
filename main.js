$(document).ready(function () {
  console.log("JS carregado corretamente!");

  // Exibe o formulário ao clicar em "Nova imagem +"
  $("#botao-nova-imagem").click(function () {
    $("#formulario").slideDown();
  });

  // Oculta o formulário ao clicar em "Cancelar"
  $("#botao-cancelar").click(function () {
    $("#formulario").slideUp();
  });

  // Captura o envio do formulário
  $("#formulario").on("submit", function (e) {
    e.preventDefault();
    const url = $("#url-imagem").val();
    console.log("URL enviada:", url);

    // Valida se é uma URL de imagem
    if (url.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
      const novaImagem = $(`
        <li>
          <img src="${url}" alt="Imagem adicionada" />
          <div class="overlay-imagem-link">
            <a href="${url}" title="Ver imagem em tamanho real" target="_blank">Ver imagem</a>
          </div>
        </li>
      `);

      $("#galeria").append(novaImagem);
      $("#formulario").slideUp();
      $("#formulario")[0].reset();
    } else {
      alert("Por favor, insira uma URL de imagem válida (.jpg, .png, .gif, .webp)");
    }
  });
});