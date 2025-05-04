// Adiciona o evento de submissão ao formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const campoA = parseFloat(document.getElementById('campoA').value); // Captura o valor do Campo A
    const campoB = parseFloat(document.getElementById('campoB').value); // Captura o valor do Campo B
    const mensagem = document.getElementById('mensagem'); // Seleciona o elemento para exibir a mensagem

    // Validação dos campos
    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido: Campo B é maior que Campo A!';
        mensagem.style.color = 'green'; // Define a cor verde para a mensagem positiva
    } else {
        mensagem.textContent = 'Formulário inválido: Campo B deve ser maior que Campo A.';
        mensagem.style.color = 'red'; // Define a cor vermelha para a mensagem negativa
    }
});
