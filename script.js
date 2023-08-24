document.addEventListener("DOMContentLoaded", function() {
    const linkContato = document.querySelector('a[href="#contato"]');
    const formularioContato = document.getElementById('formulario-contato');

    linkContato.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        formularioContato.style.display = 'block';

        // Rola para a seção de contato após exibir o formulário (opcional)
        window.location.href = "#contato";
    });

    const form = document.querySelector("#formulario-contato form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const nome = form.querySelector("#nome").value;
        const email = form.querySelector("#email").value;
        const mensagem = form.querySelector("#mensagem").value;

        if (nome && email && mensagem) {
            alert(`Mensagem enviada por ${nome} (${email}): ${mensagem}`);
            form.reset();
        } else {
            alert("Por favor, preencha todos os campos do formulário.");
        }
    });
});

// Oculta o formulário de contato inicialmente
document.getElementById('formulario-contato').style.display = 'none';