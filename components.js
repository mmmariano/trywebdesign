const navbarHTML = `
<div class="nav-container">
    <!-- LOGO FIEL -->
    <a href="/" class="logo-tech">
        TRY<span class="silver-text">WEBDESIGN</span>
    </a>
    
    <!-- MENU DESKTOP -->
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

    <!-- BOTÕES DIREITA -->
    <div class="nav-right" style="display: flex; align-items: center; gap: 12px;">
        <a href="/iniciarprojeto/" class="cta-silver">
            <span>PROJETO</span>
            <div class="shimmer"></div>
        </a>

        <!-- Botão Hamburguer -->
        <button class="mobile-toggle" id="mobileToggle">
            <span class="line"></span>
            <span class="line"></span>
        </button>
    </div>
</div>

<!-- MENU MOBILE OVERLAY -->
<div class="mobile-menu-overlay" id="mobileMenu">
    <div class="mobile-menu-inner">
        <div class="mobile-list">
            <a href="/" class="m-item">Início</a>
            
            <div class="m-group">
                <span class="m-label">Soluções</span>
                <a href="/solucoes/" class="m-sub">Web Design</a>
                <a href="/solucoes/seo" class="m-sub">SEO & Performance</a>
                <a href="/solucoes/landing-pages" class="m-sub">Landing Pages</a>
                <a href="/solucoes/e-commerce" class="m-sub">E-Commerce</a>
            </div>

            <a href="/portifolio/" class="m-item">Portfólio</a>
            <a href="/sobre/" class="m-item">Sobre</a>
            <a href="/#contato" class="m-item">Contato</a>
        </div>
    </div>
</div>
`;

// ... mantenha sua constante footerHTML igual ...

document.addEventListener("DOMContentLoaded", function() {
    const navElement = document.getElementById('navbar');
    const footerElement = document.getElementById('main-footer');

    if (navElement) navElement.innerHTML = navbarHTML;
    if (footerElement) footerElement.innerHTML = footerHTML; 

    // 1. Ativa os ícones
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // 2. Lógica do Menu Mobile (Só funciona se rodar DEPOIS do innerHTML)
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('mobileMenu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
            
            if (menu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Fechar ao clicar em qualquer link do menu
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});