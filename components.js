const navbarHTML = `
<div class="nav-container">
    <!-- LADO ESQUERDO: LOGO -->
    <a href="/" class="logo-tech">
        TRY<span class="silver-text">WEBDESIGN</span>
    </a>
    
    <!-- CENTRO: MENU DESKTOP (Soma no Mobile) -->
    <div class="nav-menu">
        <a href="/" class="nav-item-tech">
            <div class="icon-box"><i data-lucide="home"></i></div>
            <span>Início</span>
        </a>

        <div class="nav-item-tech dropdown">
            <div class="dropdown-trigger">
                <div class="icon-box"><i data-lucide="cpu"></i></div>
                <span>Soluções</span>
                <i data-lucide="chevron-down" class="chevron-icon"></i>
            </div>
            
            <div class="dropdown-menu">
                <a href="/solucoes/" class="dropdown-link">Web Design</a>
                <a href="/solucoes/seo" class="dropdown-link">SEO & Performance</a>
                <a href="/solucoes/landing-pages" class="dropdown-link">Landing Pages</a>
                <a href="/solucoes/e-commerce" class="dropdown-link">E-Commerce</a>
            </div>
        </div>

        <a href="/portifolio/" class="nav-item-tech">
            <div class="icon-box"><i data-lucide="layers"></i></div>
            <span>Portfólio</span>
        </a>

        <a href="/sobre/" class="nav-item-tech">
            <div class="icon-box"><i data-lucide="user"></i></div>
            <span>Sobre</span>
        </a>

        <a href="/#contato" class="nav-item-tech">
            <div class="icon-box"><i data-lucide="send"></i></div>
            <span>Contato</span>
        </a>
    </div>

    <!-- DIREITA: CTA + HAMBURGUER -->
    <div class="nav-right-controls">
        <a href="/iniciarprojeto/" class="cta-silver">
            <span>PROJETO</span>
            <div class="shimmer"></div>
        </a>

        <button class="mobile-toggle" id="mobileToggle" aria-label="Abrir Menu">
            <span class="line"></span>
            <span class="line"></span>
        </button>
    </div>
</div>

<!-- MENU MOBILE (FORA DA NAV-CONTAINER PARA NÃO DESALINHAR) -->
<div class="mobile-menu-overlay" id="mobileMenu">
    <div class="mobile-menu-wrapper">
        <nav class="mobile-nav-content">
            <a href="/" class="m-link">Início</a>
            
            <div class="m-group">
                <span class="m-group-title">Soluções</span>
                <div class="m-sub-list">
                    <a href="/solucoes/" class="m-sub-link">Web Design</a>
                    <a href="/solucoes/seo" class="m-sub-link">SEO & Performance</a>
                    <a href="/solucoes/landing-pages" class="m-sub-link">Landing Pages</a>
                    <a href="/solucoes/e-commerce" class="m-sub-link">E-Commerce</a>
                </div>
            </div>

            <a href="/portifolio/" class="m-link">Portfólio</a>
            <a href="/sobre/" class="m-link">Sobre</a>
            <a href="/#contato" class="m-link">Contato</a>
            
            <a href="/iniciarprojeto/" class="m-cta-mobile">
                Iniciar Projeto
            </a>
        </nav>
    </div>
</div>
`;

const footerHTML = `
<div class="container">
    <div class="footer-top">
        <div class="footer-brand">
            <div class="footer-logo logo">TRY<span>WEBDESIGN</span></div>
            <p class="footer-description">Precisão que gera autoridade.</p>
            <div class="footer-status">
                <span class="status-dot"></span> Disponível para novos projetos
            </div>
        </div>
        <div class="footer-nav-group">
            <div class="footer-column">
                <h4>Explorar</h4>
                <a href="/">Início</a>
                <a href="/solucoes/">Soluções</a>
                <a href="/portifolio/">Portifólio</a>
                <a href="/sobre/">Sobre</a>
                <a href="/iniciarprojeto/">Iniciar Projeto</a>
            </div>
            <div class="footer-column">
                <h4>Contato</h4>
                <a href="https://wa.me/5544999761842">WhatsApp</a>
                <a href="mailto:atendimentotrywebdesign@gmail.com">E-mail</a>
                <a href="/#contato">Consultoria</a>
            </div>
            <div class="footer-column">
                <h4>Social</h4>
                <a href="https://www.instagram.com/try.web.design/" target="_blank">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61579022016363" target="_blank">Facebook</a>
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
    
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Lógica Menu Mobile
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('mobileMenu');
    
    if(toggle && menu) {
        toggle.addEventListener('click', () => {
            const isActive = toggle.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        // Fecha ao clicar
        menu.addEventListener('click', (e) => {
            if(e.target.tagName === 'A') {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});