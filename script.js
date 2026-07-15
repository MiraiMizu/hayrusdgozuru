document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === slides.length - 1;
        
        // Hide next button on last slide and change text
        if (currentSlide === slides.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'inline-block';
        }
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlides();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlides();
        }
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlides();
        } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
            currentSlide--;
            updateSlides();
        }
    });

    updateSlides();

    // Final Slide Logic
    const btnForgive = document.getElementById('btn-forgive');
    const btnNotForgive = document.getElementById('btn-not-forgive');
    const finalTitle = document.getElementById('final-title');
    const finalText = document.getElementById('final-text');
    const finalImg = document.getElementById('final-img');

    btnNotForgive.addEventListener('click', () => {
        finalTitle.innerHTML = 'Hadi Ama! 🥺';
        finalText.innerHTML = 'Bu eşeğe yazık, affettin hadi hadi!';
        finalImg.src = './essekk.png';
        finalImg.style.display = 'inline-block';
        btnNotForgive.style.display = 'none'; // Sadece affettim butonu kalsın
    });

    btnForgive.addEventListener('click', () => {
        // Konfeti patlat
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        finalTitle.innerHTML = 'YİHUUUU! 🎉';
        finalText.innerHTML = 'Dünyanın en şanslı malı benim!';
        finalImg.src = './mal.png';
        finalImg.style.display = 'inline-block';
        
        btnForgive.style.display = 'none';
        btnNotForgive.style.display = 'none';
    });
});
