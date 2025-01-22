function updateHeaderStyle() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#000000'; // Cor de fundo quando rolar
        header.style.color = '#ffffff'; // Cor do texto quando rolar
    } else {
        header.style.backgroundColor = 'transparent'; // Cor de fundo original
        header.style.color = 'var(--secondary-color)'; // Cor do texto original
    }
}

// Atualiza o estilo do header ao carregar a página
window.addEventListener('load', updateHeaderStyle);

// Atualiza o estilo do header ao rolar a página
window.addEventListener('scroll', updateHeaderStyle);


// Adiciona a classe ativa ao item do menu clicado
document.querySelectorAll('header ul.nav li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('header ul.nav li a').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});