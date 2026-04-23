
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
        <a href="/portfolio/" class="nav-item-tech"><div class="icon-box"><i data-lucide="layers"></i></div><span>Portfólio</span></a>
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
            <a href="/portfolio/" class="m-item">Portfólio</a>
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
                <a href="/portfolio/">Portfólio</a>
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
            <p>© 2025 TRYWEBDESIGN. Todos os direitos reservados. Mateus M. Mariano </p>
        </div>
        <div class="back-to-top"><a href="#" class="scroll-top">Voltar ao topo <i data-lucide="arrow-up" size="14"></i></a></div>
    </div>
</div>
`;

function setupNavbar() {
    const navElement = document.getElementById('navbar');
    const footerElement = document.getElementById('main-footer');

    if (navElement) {
        navElement.innerHTML = navbarHTML;
        
        // Ativa o clique IMEDIATAMENTE após inserir o HTML
        const toggle = document.getElementById('mobileToggle');
        const menu = document.getElementById('mobileMenu');

        if (toggle && menu) {
            toggle.onclick = function() {
                toggle.classList.toggle('active');
                menu.classList.toggle('active');
                
                if (menu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                    menu.style.display = 'flex'; // Força o display flex
                } else {
                    document.body.style.overflow = '';
                    menu.style.display = 'none'; // Esconde completamente
                }
            };
        }
    }

    if (footerElement) footerElement.innerHTML = footerHTML;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}
document.body.insertAdjacentHTML('beforeend', whatsappFluanteHTML);
// Inicia tudo
document.addEventListener("DOMContentLoaded", setupNavbar);
function setupNavbar() {
    const navElement = document.getElementById('navbar');
    const footerElement = document.getElementById('main-footer');

    if (navElement) {
        navElement.innerHTML = navbarHTML;
        
        const toggle = document.getElementById('mobileToggle');
        const menu = document.getElementById('mobileMenu');

        if (toggle && menu) {
            toggle.onclick = function(e) {
                e.preventDefault();
                // Toggle simples de classes
                toggle.classList.toggle('active');
                menu.classList.toggle('active');
                
                // Trava o scroll do corpo quando o menu está aberto
                if (menu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            };
        }
    }

    if (footerElement) footerElement.innerHTML = footerHTML;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// HTML do botão pequeno
const whatsappFluanteHTML = `
<a href="https://wa.me/5544999761842" class="whatsapp-fixo-small" target="_blank" aria-label="Chat no WhatsApp">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.845L.057 23.428a.75.75 0 0 0 .921.921l5.583-1.453A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-4.97-1.362l-.356-.211-3.696.962.982-3.588-.232-.37A9.751 9.751 0 1 1 12 21.75z" fill="#fff"/>
    </svg>
</a>
`;

// Dentro da sua função setupNavbar (ou onde você injeta o footer), adicione:
