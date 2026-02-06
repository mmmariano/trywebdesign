const navbarHTML = `
<div class="nav-container">
    <a href="/" class="logo-tech">
        TRY<span class="silver-text">WEBDESIGN</span>
    </a>
    
    <div class="nav-menu">
        <a href="/" class="nav-item-tech">
            <div class="icon-box"><i data-lucide="home"></i></div>
            <span>Início</span>
        </a>

        <!-- Soluções com Dropdown via Hover (Desktop) -->
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

    <div class="nav-right-wrapper" style="display: flex; align-items: center; gap: 15px;">
        <a href="/iniciarprojeto/" class="cta-silver">
            <span>Iniciar Projeto</span>
            <div class="shimmer"></div>
        </a>

        <!-- BOTÃO MOBILE HAMBURGER -->
        <button class="mobile-toggle" id="mobileToggle">
            <span class="line"></span>
            <span class="line"></span>
        </button>
    </div>
</div>

<!-- OVERLAY DO MENU MOBILE COM DROPDOWN INCLUSO -->
<div class="mobile-menu-overlay" id="mobileMenu">
    <div class="mobile-menu-inner">
        <nav class="mobile-nav-list">
            <a href="/" class="mobile-link">Início</a>
            
            <!-- Grupo Soluções no Mobile -->
            <div class="mobile-nav-group">
                <span class="mobile-link-header">Soluções</span>
                <div class="mobile-sub-menu">
                    <a href="/solucoes/" class="mobile-sub-link">Web Design</a>
                    <a href="/solucoes/seo" class="mobile-sub-link">SEO & Performance</a>
                    <a href="/solucoes/landing-pages" class="mobile-sub-link">Landing Pages</a>
                    <a href="/solucoes/e-commerce" class="mobile-sub-link">E-Commerce</a>
                </div>
            </div>

            <a href="/portifolio/" class="mobile-link">Portfólio</a>
            <a href="/sobre/" class="mobile-link">Sobre</a>
            <a href="/#contato" class="mobile-link">Contato</a>
            <a href="/iniciarprojeto/" class="mobile-link" style="color: #0071e3; margin-top: 20px;">Iniciar Projeto</a>
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
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Lógica do Menu Mobile
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('mobileMenu');
    
    if(toggle && menu) {
        toggle.addEventListener('click', () => {
            const isActive = toggle.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-sub-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});