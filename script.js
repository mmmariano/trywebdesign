function togglePatricia(botao) {
    var container = document.getElementById('containerPatricia');
    var span = botao.querySelector('span');

    if (container.classList.contains('collapsed')) {
        container.classList.remove('collapsed');
        container.classList.add('aberto');
        botao.classList.add('active');
        span.innerText = 'Ver Menos';
    } else {
        container.classList.remove('aberto');
        container.classList.add('collapsed');
        botao.classList.remove('active');
        span.innerText = 'Mais Informações';
        
        // Scroll suave de volta ao topo do card
        botao.closest('.testimonial-card').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}