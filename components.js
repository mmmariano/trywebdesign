const navbarHTML = `
<div class="nav-container">
    <a href="/" class="logo-tech">
        TRY<span class="silver-text">WEBDESIGN</span>
    </a>
    
    <div class="nav-menu">
        <!-- Início -->
        <a href="/" class="nav-item-tech">
            <div class="icon-box"><i data-lucide="home"></i></div>
            <span>Início</span>
        </a>

        <!-- Soluções -->
        <a href="/solucoes/index.html" class="nav-item-tech">
            <div class="icon-box"><i data-lucide="cpu"></i></div>
            <span>Soluções</span>
        </a>

        <!-- Portfólio -->
        <a href="/portifolio/index.html" class="nav-item-tech">
            <div class="icon-box"><i data-lucide="layers"></i></div>
            <span>Portfólio</span>
        </a>

        <!-- Sobre -->
        <a href="/sobre/index.html" class="nav-item-tech">
            <div class="icon-box"><i data-lucide="user"></i></div>
            <span>Sobre</span>
        </a>

        <!-- Contato -->
        <a href="/#contato" class="nav-item-tech">
            <div class="icon-box"><i data-lucide="send"></i></div>
            <span>Contato</span>
        </a>
    </div>

    <a href="/iniciarprojeto/index.html" class="cta-silver">
        <span>Iniciar Projeto</span>
        <div class="shimmer"></div>
    </a>
</div>
`;
const footerHTML = `
<div class="container">
    <div class="footer-top">
        <div class="footer-brand">
            <div class="footer-logo logo">TRY<span>WEBDESIGN</span></div>
            <p class="footer-description">
Precisão que gera autoridade. <br>
            </p>
            <div class="footer-status">
                <span class="status-dot"></span> Disponível para novos projetos
            </div>
        </div>

        <div class="footer-nav-group">
            <div class="footer-column">
                <h4>Explorar</h4>
                <a href="/">Início</a>
                <a href="/solucoes/index.html">Soluções</a>
                <a href="/portifolio/index.html">Portifólio</a>
                <a href="/solucoes/index.html">Sobre</a>
            </div>

            <div class="footer-column">
                <h4>Contato</h4>
                <a href="https://wa.me/5544999761842">WhatsApp</a>
                <a href="mailto:atendimentotrywebdesign@gmail.com">E-mail</a>
                <a href="/index.html#contato">Consultoria</a>
            </div>

            <div class="footer-column">
                <h4>Social</h4>
                <a href="https://www.instagram.com/try.web.design/" target="_blank">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61579022016363 target="_blank">Facebook</a>
                <a href="#" target="_blank">LinkedIn</a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="footer-legal">
            <p>© 2025 TRYWEBDESIGN. Todos os direitos reservados.</p>
            <div class="legal-links">
                <a href="#">Privacidade</a>
                <a href="#">Termos</a>
            </div>
        </div>
        <div class="back-to-top">
            <a href="#" class="scroll-top">Voltar ao topo <i data-lucide="arrow-up" size="14"></i></a>
        </div>
    </div>
</div>
`;
document.addEventListener("DOMContentLoaded", function() {
    const navElement = document.getElementById('navbar');
    const footerElement = document.getElementById('main-footer');

    if (navElement) navElement.innerHTML = navbarHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});