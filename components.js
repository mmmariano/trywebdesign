const navbarHTML = `
<div class="nav-container">
    <a href="/" class="logo-tech">
        TRY<span class="silver-text">WEBDESIGN</span>
    </a>
    
    <!-- Menu Desktop (mantido exatamente igual) -->
    <div class="nav-menu">
        <a href="/" class="nav-item-tech">
            <div class="icon-box"><i data-lucide="home"></i></div>
            <span>Início</span>
        </a>

        <!-- Soluções com Dropdown via Hover -->
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

    <a href="/iniciarprojeto/" class="cta-silver">
        <span>Iniciar Projeto</span>
        <div class="shimmer"></div>
    </a>

    <!-- Botão Hambúrguer Mobile -->
    <button class="mobile-menu-toggle" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
    </button>
</div>

<!-- Menu Mobile (overlay fullscreen) -->
<div class="mobile-menu-overlay">
    <div class="mobile-menu-content">
        <a href="/" class="mobile-nav-item">
            <div class="icon-box"><i data-lucide="home"></i></div>
            <span>Início</span>
        </a>

        <!-- Soluções com Accordion Mobile -->
        <div class="mobile-nav-item mobile-dropdown">
            <div class="mobile-dropdown-trigger">
                <div class="icon-box"><i data-lucide="cpu"></i></div>
                <span>Soluções</span>
                <i data-lucide="chevron-down" class="mobile-chevron"></i>
            </div>
            <div class="mobile-submenu">
                <a href="/solucoes/" class="mobile-submenu-link">Web Design</a>
                <a href="/solucoes/seo" class="mobile-submenu-link">SEO & Performance</a>
                <a href="/solucoes/landing-pages" class="mobile-submenu-link">Landing Pages</a>
                <a href="/solucoes/e-commerce" class="mobile-submenu-link">E-Commerce</a>
            </div>
        </div>

        <a href="/portifolio/" class="mobile-nav-item">
            <div class="icon-box"><i data-lucide="layers"></i></div>
            <span>Portfólio</span>
        </a>

        <a href="/sobre/" class="mobile-nav-item">
            <div class="icon-box"><i data-lucide="user"></i></div>
            <span>Sobre</span>
        </a>

        <a href="/#contato" class="mobile-nav-item">
            <div class="icon-box"><i data-lucide="send"></i></div>
            <span>Contato</span>
        </a>

        <!-- CTA no Mobile -->
        <a href="/iniciarprojeto/" class="mobile-cta">
            <span>Iniciar Projeto</span>
        </a>
    </div>
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
                <a href="/solucoes/">Soluções</a>
                <a href="/portifolio/">Portifólio</a>
                <a href="/solucoes/">Sobre</a>
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

    // Lógica do Menu Mobile
    initMobileMenu();
});

function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileDropdown = document.querySelector('.mobile-dropdown');
    const body = document.body;

    // Abrir/Fechar menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
    }

    // Accordion do dropdown "Soluções" no mobile
    if (mobileDropdown) {
        const trigger = mobileDropdown.querySelector('.mobile-dropdown-trigger');
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            mobileDropdown.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em link (exceto no dropdown)
    const mobileLinks = document.querySelectorAll('.mobile-nav-item:not(.mobile-dropdown)');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Fechar ao clicar no overlay (fundo escuro)
    mobileOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            menuToggle.classList.remove('active');
            this.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}