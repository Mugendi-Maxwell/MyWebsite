
document.getElementById('menuButton').addEventListener('click', function() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});


function showSection(sectionId) {
    const sections = ['home', 'skills', 'projects', 'contact'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        section.style.display = (id === sectionId) ? 'block' : 'none';
    });
    document.getElementById('dropdownMenu').style.display = 'none'; 
}
