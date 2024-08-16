function toggleSection(sectionId) {
    // Obter todos os elementos com a classe "section-content"
    const sections = document.querySelectorAll('.section-content');
    // Ocultar todas as seções
    sections.forEach(section => {
        section.classList.remove('active');
    });
    // Exibir a seção clicada
    document.getElementById(sectionId).classList.add('active');
}