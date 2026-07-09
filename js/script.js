document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Adjust for sticky header height
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle (Basic implementation)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if(mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            const isVisible = navMenu.style.display === 'block';
            navMenu.style.display = isVisible ? 'none' : 'block';
            navMenu.style.position = isVisible ? 'static' : 'absolute';
            if(!isVisible) {
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = '#fff';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                
                const ul = navMenu.querySelector('ul');
                ul.style.flexDirection = 'column';
            } else {
                const ul = navMenu.querySelector('ul');
                ul.style.flexDirection = 'row';
            }
        });
    }
});
