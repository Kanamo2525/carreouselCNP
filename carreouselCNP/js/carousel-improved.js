/**
 * Modern Carousel CNP - Enhanced Interactive Carousel Component
 * Features: Step counter, Progress bar, Modern dot indicators, Smooth transitions
 */

class ModernCarouselCNP {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.totalSlides = this.slides.length;
        this.isTransitioning = false;

        // UI Elements
        this.stepCounter = document.getElementById('stepCounter');
        this.currentStepSpan = document.getElementById('currentStep');
        this.totalStepsSpan = document.getElementById('totalSteps');
        this.progressBar = document.getElementById('progressBar');
        this.dotIndicators = document.getElementById('dotIndicators');

        this.init();
    }

    init() {
        this.setupDotIndicators();
        this.bindEvents();
        this.setupKeyboardNavigation();
        this.setupTouchNavigation();
        this.updateUI();
    }

    setupDotIndicators() {
        // Create dot for each slide
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'dot';
            dot.setAttribute('aria-label', `Aller à l'étape ${i + 1}`);
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotIndicators.appendChild(dot);
        }
    }

    bindEvents() {
        // Navigation buttons
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');

        if (prevButton) {
            prevButton.addEventListener('click', () => this.previousSlide());
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => this.nextSlide());
        }

        // CTA button on intro slide
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => this.goToSlide(1));
        }
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            } else if (e.key === 'Home') {
                this.goToSlide(0);
            } else if (e.key === 'End') {
                this.goToSlide(this.totalSlides - 1);
            }
        });
    }

    setupTouchNavigation() {
        let touchStartX = 0;
        let touchEndX = 0;
        const container = document.querySelector('.carousel-container');

        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.previousSlide();
            }
        }
    }

    nextSlide() {
        if (this.isTransitioning) return;
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    previousSlide() {
        if (this.isTransitioning) return;
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    goToSlide(index) {
        if (this.isTransitioning || index === this.currentSlide) return;

        this.isTransitioning = true;

        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');

        // Update current slide index
        this.currentSlide = index;

        // Add active class to new slide
        this.slides[this.currentSlide].classList.add('active');

        // Update all UI elements
        this.updateUI();

        // Reset transition lock after animation completes
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }

    updateUI() {
        this.updateStepCounter();
        this.updateProgressBar();
        this.updateDotIndicators();
    }

    updateStepCounter() {
        // Show/hide step counter (hide on intro slide)
        if (this.currentSlide === 0) {
            this.stepCounter.classList.remove('show');
        } else {
            this.stepCounter.classList.add('show');
            this.currentStepSpan.textContent = this.currentSlide;
            this.totalStepsSpan.textContent = this.totalSlides - 1; // Exclude intro slide
        }
    }

    updateProgressBar() {
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    updateDotIndicators() {
        const dots = this.dotIndicators.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Public API methods
    getCurrentSlide() {
        return this.currentSlide;
    }

    getTotalSlides() {
        return this.totalSlides;
    }

    // Auto-play functionality (optional)
    startAutoPlay(interval = 5000) {
        this.stopAutoPlay(); // Clear any existing interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, interval);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    // Navigate to specific section
    goToForumEcoute() {
        this.goToSlide(1);
    }

    goToForumAction() {
        this.goToSlide(6);
    }

    goToBilan() {
        this.goToSlide(9);
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new ModernCarouselCNP();

    // Make carousel accessible globally for debugging/testing
    window.carousel = carousel;

    // Optional: Enable auto-play (uncomment to activate)
    // carousel.startAutoPlay(5000);

    // Pause auto-play on hover (if enabled)
    const container = document.querySelector('.carousel-container');
    if (container) {
        container.addEventListener('mouseenter', () => {
            if (carousel.autoPlayInterval) {
                carousel.stopAutoPlay();
            }
        });

        // Optional: Restart auto-play on mouse leave
        // container.addEventListener('mouseleave', () => {
        //     carousel.startAutoPlay(5000);
        // });
    }

    // Add keyboard shortcuts info to console
    console.log(`
%c🎠 Carrousel @move² - Raccourcis Clavier
%c
← / → : Navigation entre les slides
Home   : Retour au début
End    : Aller à la fin

%cAPI JavaScript disponible:
%c
carousel.goToSlide(index)       - Aller à un slide spécifique
carousel.nextSlide()            - Slide suivant
carousel.previousSlide()        - Slide précédent
carousel.goToForumEcoute()      - Aller au Forum d'écoute
carousel.goToForumAction()      - Aller au Forum d'action
carousel.goToBilan()            - Aller au Bilan
carousel.startAutoPlay(5000)    - Démarrer le défilement auto
carousel.stopAutoPlay()         - Arrêter le défilement auto
carousel.getCurrentSlide()      - Obtenir l'index du slide actuel
carousel.getTotalSlides()       - Obtenir le nombre total de slides
    `,
    'color: #002364; font-size: 16px; font-weight: bold;',
    'color: #666; font-size: 12px;',
    'color: #39A8E5; font-size: 14px; font-weight: bold;',
    'color: #666; font-size: 12px; font-family: monospace;'
    );
});

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModernCarouselCNP;
}
