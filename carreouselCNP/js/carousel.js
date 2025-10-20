/**
 * Carousel CNP - Interactive Carousel Component
 * Manages slide navigation, transitions, and user interactions
 */

class CarouselCNP {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.totalSlides = this.slides.length;
        this.isTransitioning = false;

        this.init();
    }

    init() {
        this.bindEvents();
        this.updateProgressDots();
        this.setupKeyboardNavigation();
        this.setupTouchNavigation();
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

        // Progress dots
        this.bindProgressDots();

        // Discover buttons
        const discoverButtons = document.querySelectorAll('.discover-button');
        discoverButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // You can customize this behavior
                this.nextSlide();
            });
        });
    }

    bindProgressDots() {
        const allDots = document.querySelectorAll('.dot');
        allDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Calculate which slide this dot corresponds to
                const slideContainer = dot.closest('.carousel-slide');
                if (slideContainer) {
                    const slideIndex = Array.from(this.slides).indexOf(slideContainer);
                    // Navigate to the intro slide (index 0) plus the dot index
                    if (slideIndex > 0) {
                        this.goToSlide(slideIndex);
                    }
                }
            });
        });
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
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
                // Swipe left - next slide
                this.nextSlide();
            } else {
                // Swipe right - previous slide
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

        // Update progress dots
        this.updateProgressDots();

        // Reset transition lock after animation completes
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }

    updateProgressDots() {
        const currentSlideElement = this.slides[this.currentSlide];
        const dots = currentSlideElement.querySelectorAll('.dot');

        // Update dots within the current slide
        dots.forEach((dot, index) => {
            if (index === this.currentSlide - 1 && this.currentSlide > 0) {
                dot.classList.add('active');
            } else {
                // For proper dot highlighting per section
                const isInRange = this.shouldDotBeActive(index);
                if (isInRange) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            }
        });
    }

    shouldDotBeActive(dotIndex) {
        // Map slides to dot indices
        // Slide 0 (intro): no dots active
        // Slides 1-5 (FE): dots 0-4
        // Slides 6-8 (FA): dots 5-7
        // Slides 9-10 (Bilan): dots 8-9

        if (this.currentSlide === 0) return false;

        if (this.currentSlide >= 1 && this.currentSlide <= 5) {
            return dotIndex === this.currentSlide - 1;
        }

        if (this.currentSlide >= 6 && this.currentSlide <= 8) {
            return dotIndex === this.currentSlide - 1;
        }

        if (this.currentSlide >= 9 && this.currentSlide <= 10) {
            return dotIndex === this.currentSlide - 1;
        }

        return false;
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
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new CarouselCNP();

    // Make carousel accessible globally for debugging/testing
    window.carousel = carousel;

    // Optional: Uncomment to enable auto-play
    // carousel.startAutoPlay(5000);

    // Pause auto-play on hover (if enabled)
    const container = document.querySelector('.carousel-container');
    if (container) {
        container.addEventListener('mouseenter', () => {
            if (carousel.autoPlayInterval) {
                carousel.stopAutoPlay();
            }
        });

        container.addEventListener('mouseleave', () => {
            // Uncomment to restart auto-play on mouse leave
            // carousel.startAutoPlay(5000);
        });
    }
});

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CarouselCNP;
}
