const floatingButtonsHTML = `
<div class="floating-buttons">
  <a href="https://wa.me/5544999761842" target="_blank" class="float-btn whatsapp" title="WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.845L.057 23.428a.75.75 0 0 0 .921.921l5.583-1.453A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-4.97-1.362l-.356-.211-3.696.962.982-3.588-.232-.37A9.751 9.751 0 1 1 12 21.75z"/></svg>
  </a>
  <a href="https://www.instagram.com/try.web.design" target="_blank" class="float-btn instagram" title="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.063 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.069-4.85.069s-3.584-.012-4.849-.069c-1.366-.063-2.633-.335-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608C4.518 2.497 5.785 2.225 7.151 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.085-1.857-.601-3.699-1.942-5.04C20.698.673 18.856.157 17 .072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
  </a>
  <a href="https://www.facebook.com/profile.php?id=61579022016363" target="_blank" class="float-btn facebook" title="Facebook">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
  </a>
</div>
`;

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
    
document.body.insertAdjacentHTML('beforeend', floatingButtonsHTML);
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

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
// 1. Definição do HTML dos Botões Flutuantes
const floatingButtonsHTML = `
<div class="floating-buttons">
  <a href="https://wa.me/5544999761842" target="_blank" class="float-btn whatsapp" title="WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.845L.057 23.428a.75.75 0 0 0 .921.921l5.583-1.453A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-4.97-1.362l-.356-.211-3.696.962.982-3.588-.232-.37A9.751 9.751 0 1 1 12 21.75z"/>
    </svg>
  </a>
  <a href="https://www.instagram.com/try.web.design" target="_blank" class="float-btn instagram" title="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.063 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.069-4.85.069s-3.584-.012-4.849-.069c-1.366-.063-2.633-.335-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608C4.518 2.497 5.785 2.225 7.151 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.085-1.857-.601-3.699-1.942-5.04C20.698.673 18.856.157 17 .072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  </a>
  <a href="https://www.facebook.com/profile.php?id=61579022016363" target="_blank" class="float-btn facebook" title="Facebook">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  </a>
</div>
`;

// 2. HTML da Navbar e Footer (Mantendo o que você já tem...)
const navbarHTML = `...`; // Seu código da navbar
const footerHTML = `...`; // Seu código do footer

// 3. Função Principal de Setup
function setupComponents() {
    const navElement = document.getElementById('navbar');
    const footerElement = document.getElementById('main-footer');

    // Injeta Navbar
    if (navElement) {
        navElement.innerHTML = navbarHTML;
        
        const toggle = document.getElementById('mobileToggle');
        const menu = document.getElementById('mobileMenu');

        if (toggle && menu) {
            toggle.onclick = function(e) {
                e.preventDefault();
                toggle.classList.toggle('active');
                menu.classList.toggle('active');
                document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
            };
        }
    }

    // Injeta Footer
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }

    // Injeta Botões Flutuantes (Diretamente no final do body)
    document.body.insertAdjacentHTML('beforeend', floatingButtonsHTML);

    // Inicializa ícones do Lucide se a biblioteca estiver presente
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// 4. Inicia tudo ao carregar o DOM
document.addEventListener("DOMContentLoaded", setupComponents);
