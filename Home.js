document.addEventListener('DOMContentLoaded', function() {
            const seeMoreBtn = document.getElementById('btn-go-down');
            const targetSection = document.getElementById('top-selling-section');
            
            seeMoreBtn.addEventListener('click', function() {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }); 
        });