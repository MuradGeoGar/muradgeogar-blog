document.addEventListener('DOMContentLoaded', function() {
    // Mobil menyu elementlərini seçirik
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        // Menyu düyməsinə klikləmə hadisəsi
        menuToggle.addEventListener('click', function() {
            // Naviqasiya sinfini dəyişir (göstər/gizlə)
            mainNav.classList.toggle('active'); 
            
            // Accessibility və simvol yenilənməsi
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            if (mainNav.classList.contains('active')) {
                menuToggle.textContent = '✕'; // Bağla simvolu
            } else {
                menuToggle.textContent = '☰'; // Aç simvolu
            }
        });
    }

    // Dropdown menyularını mobil cihazlarda kliklə açmaq
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
    dropdownLinks.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(e) {
            // Əgər mobil menyu aktivdirsə və mobil ölçüdədirsə
            if (mainNav.classList.contains('active') && window.innerWidth <= 768) {
                e.preventDefault();
                const content = this.nextElementSibling;
                
                // Cari dropdown-u açır/bağlayır
                content.style.display = content.style.display === 'block' ? 'none' : 'block';

                // Digər açıq dropdown-ları bağlayır (təmizlik üçün)
                document.querySelectorAll('.dropdown-content').forEach(dc => {
                    if (dc !== content) dc.style.display = 'none';
                });
            }
        });
    });
});
