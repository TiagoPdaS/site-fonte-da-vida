document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    // Adiciona fundo preto ao abrir menu
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('hidden'); // Esconde o botão hamburguer
        document.body.classList.toggle('menu-open'); // Ativa fundo preto no body
    });

    // Fecha menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && mainNav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Fecha menu ao clicar em um link do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMenu();
            }
        });
    });

    // Função para fechar o menu
    function closeMenu() {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('hidden'); // Mostra novamente o botão hamburguer
        document.body.classList.remove('menu-open');
    }

    // Atualiza o estilo do header ao carregar a página
    window.addEventListener('load', updateHeaderStyle);

    // Atualiza o estilo do header ao rolar a página
    window.addEventListener('scroll', updateHeaderStyle);

    // Estiliza o header dinamicamente ao rolar a página
    function updateHeaderStyle() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#000000'; // Cor de fundo quando rolar
            header.style.color = '#ffffff'; // Cor do texto quando rolar
        } else {
            header.style.backgroundColor = 'transparent'; // Cor de fundo original
            header.style.color = 'var(--secondary-color)'; // Cor do texto original
        }
    }
});
