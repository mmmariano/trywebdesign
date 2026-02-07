// ========================================
// COMPONENTS.JS - VERSÃO LIMPA E FUNCIONAL
// ========================================

const navbarHTML = `
<div class="nav-container">
    <a href="/" class="logo-tech">TRY<span class="silver-text">WEBDESIGN</span></a>
    
    <div class="nav-menu">
        <a href="/" class="nav-item-tech"><div class="icon-box"><i data-lucide="home"></i></div><span>Início</span></a>
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
        <a href="/portifolio/" class="nav-item-tech"><div class="icon-box"><i data-lucide="layers"></i></div><span>Portfólio</span></a>
        <a href="/sobre/" class="nav-item-tech"><div class="icon-box"><i data-lucide="user"></i></div><span>Sobre</span></a>
        <a href="/#contato" class="nav-item-tech"><div class="icon-box"><i data-lucide="send"></i></div><span>Contato</span></a>
    </div>

    <div class="nav-right" style="display: flex; align-items: center; gap: 12px;">
        <a href="/iniciarprojeto/" class="cta-silver"><span>INICIAR<span class="hide-mobile"> PROJETO</span></span><div class="shimmer"></div></a>

        <button class="mobile-toggle" id="mobileToggle">
            <span class="line"></span>
            <span class="line"></span>
        </button>
    </div>
</div>

<div class="mobile-menu-overlay" id="mobileMenu">
    <div class="mobile-menu-inner">
        <nav class="mobile-list">
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
            <div class="footer-status"><span class="status-dot"></span> Disponível para novos projetos</div>
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
            <div class="legal-links"><a href="#">Privacidade</a><a href="#">Termos</a></div>
        </div>
        <div class="back-to-top"><a href="#" class="scroll-top">Voltar ao topo <i data-lucide="arrow-up" size="14"></i></a></div>
    </div>
</div>
`;

// ========================================
// FUNÇÃO PRINCIPAL - SEM DUPLICATAS
// ========================================
function setupNavbar() {
    console.log('🚀 Iniciando setupNavbar...');
    
    const navElement = document.getElementById('navbar');
    const footerElement = document.getElementById('main-footer');

    // Injeta o HTML
    if (navElement) {
        navElement.innerHTML = navbarHTML;
        console.log('✅ Navbar HTML injetado');
    }

    if (footerElement) {
        footerElement.innerHTML = footerHTML;
        console.log('✅ Footer HTML injetado');
    }

    // Aguarda o próximo frame para garantir que o DOM foi atualizado
    requestAnimationFrame(() => {
        console.log('🔍 Procurando elementos...');
        
        const toggle = document.getElementById('mobileToggle');
        const menu = document.getElementById('mobileMenu');

        console.log('Toggle encontrado:', toggle);
        console.log('Menu encontrado:', menu);

        if (toggle && menu) {
            console.log('✅ Elementos encontrados! Adicionando eventos...');
            
            // Evento principal de toggle
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('🔥 CLIQUE DETECTADO NO BOTÃO!');
                
                const isActive = toggle.classList.contains('active');
                
                if (isActive) {
                    // FECHAR
                    toggle.classList.remove('active');
                    menu.classList.remove('active');
                    document.body.style.overflow = '';
                    console.log('❌ Menu FECHADO');
                } else {
                    // ABRIR
                    toggle.classList.add('active');
                    menu.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    console.log('✅ Menu ABERTO');
                }
            });

            // Fecha ao clicar nos links
            const menuLinks = menu.querySelectorAll('a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    console.log('🔗 Link clicado, fechando menu');
                    toggle.classList.remove('active');
                    menu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            console.log('✅ Eventos de clique adicionados com sucesso!');
        } else {
            console.error('❌ ERRO: Elementos não encontrados!');
            console.error('Toggle:', toggle);
            console.error('Menu:', menu);
        }

        // Inicializa os ícones do Lucide
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
            console.log('✅ Ícones Lucide inicializados');
        } else {
            console.warn('⚠️ Lucide não encontrado');
        }
    });
}

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Carregado, executando setupNavbar');
    setupNavbar();
});

// Log para confirmar que o script foi carregado
console.log('📦 components.js carregado com sucesso');
