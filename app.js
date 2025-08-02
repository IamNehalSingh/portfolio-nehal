// Enhanced Portfolio JavaScript with Comprehensive Homepage Animations
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all animations and interactions
    initLoadingScreen();
    initCursorTrail();
    initBackgroundParticles();
    initProfileParticles();
    initTypewriter();
    initQuoteTypewriter();
    initNavigation();
    initScrollAnimations();
    initStatisticsCounters();
    initSkillAnimations();
    initProjectStats();
    initFormAnimations();
    initButtonRipples();
    initMobileMenu();
    initParallaxEffects();
    initFloatingShapes();

    // Loading Screen Animation
    function initLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const loadingProgress = document.querySelector('.loading-progress');

        // Animate loading progress
        setTimeout(() => {
            loadingProgress.style.transform = 'translateX(0)';
        }, 500);

        // Create floating particles for loading screen
        createLoadingParticles();

        // Hide loading screen after animation completes
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            document.body.style.overflow = 'visible';
            startMainAnimations();
        }, 3000);
    }

    function createLoadingParticles() {
        const particlesContainer = document.querySelector('.loading-particles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(50, 184, 198, ${Math.random() * 0.8 + 0.2});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 4 + 3}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            particlesContainer.appendChild(particle);
        }

        // Add particle animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                25% { transform: translate(30px, -20px) scale(1.2); opacity: 0.8; }
                50% { transform: translate(-15px, -40px) scale(0.8); opacity: 0.6; }
                75% { transform: translate(-25px, -10px) scale(1.1); opacity: 0.9; }
            }
        `;
        document.head.appendChild(style);
    }

    // Cursor Trail Animation
    function initCursorTrail() {
        const cursorTrail = document.getElementById('cursor-trail');
        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorTrail.style.opacity = '0.8';
        });

        document.addEventListener('mouseleave', () => {
            cursorTrail.style.opacity = '0';
        });

        function animateTrail() {
            trailX += (mouseX - trailX) * 0.1;
            trailY += (mouseY - trailY) * 0.1;

            cursorTrail.style.left = trailX + 'px';
            cursorTrail.style.top = trailY + 'px';

            requestAnimationFrame(animateTrail);
        }
        animateTrail();
    }

    // Background Particles Animation
    function initBackgroundParticles() {
        const particlesContainer = document.getElementById('background-particles');
        const particleCount = 80;

        for (let i = 0; i < particleCount; i++) {
            createBackgroundParticle(particlesContainer, i);
        }
    }

    function createBackgroundParticle(container, index) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2;
        const opacity = Math.random() * 0.5 + 0.1;
        const duration = Math.random() * 20 + 15;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(50, 184, 198, ${opacity}), transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatBackground ${duration}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
        `;

        container.appendChild(particle);

        // Add floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatBackground {
                0%, 100% { 
                    transform: translate(0, 0) scale(1); 
                    opacity: ${opacity};
                }
                25% { 
                    transform: translate(30px, -40px) scale(1.3); 
                    opacity: ${opacity * 1.5};
                }
                50% { 
                    transform: translate(-25px, -80px) scale(0.7); 
                    opacity: ${opacity * 0.7};
                }
                75% { 
                    transform: translate(-35px, -20px) scale(1.1); 
                    opacity: ${opacity * 1.2};
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Profile Particles Animation
    function initProfileParticles() {
        const profileContainer = document.querySelector('.floating-particles-profile');
        if (!profileContainer) return;

        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 4 + 2;
            const delay = Math.random() * 3;

            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(50, 184, 198, 0.6);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatProfileParticle ${Math.random() * 4 + 3}s ease-in-out infinite;
                animation-delay: ${delay}s;
                pointer-events: none;
            `;

            profileContainer.appendChild(particle);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatProfileParticle {
                0%, 100% { 
                    transform: translate(0, 0) scale(1) rotate(0deg); 
                    opacity: 0.6; 
                }
                25% { 
                    transform: translate(15px, -20px) scale(1.5) rotate(90deg); 
                    opacity: 1; 
                }
                50% { 
                    transform: translate(-10px, -30px) scale(0.5) rotate(180deg); 
                    opacity: 0.3; 
                }
                75% { 
                    transform: translate(-20px, -10px) scale(1.2) rotate(270deg); 
                    opacity: 0.8; 
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Fixed Typewriter Effect for Hero
    function initTypewriter() {
        const heroName = document.getElementById('hero-name');
        const heroTitle = document.getElementById('hero-title');
        const nameCursor = document.getElementById('name-cursor');
        const titleCursor = document.getElementById('title-cursor');

        if (!heroName || !heroTitle) return;

        const nameText = 'Nehal Singh Parmar';
        const titleText = 'Software Development Engineer in Test (SDET)';

        function typeWriter(element, text, cursor, callback) {
            element.textContent = '';
            let index = 0;

            function type() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, 100);
                } else {
                    // Hide cursor when typing is complete
                    if (cursor) {
                        cursor.classList.add('hidden');
                    }
                    if (callback) {
                        setTimeout(callback, 500);
                    }
                }
            }
            type();
        }

        // Start typing after loading screen
        setTimeout(() => {
            typeWriter(heroName, nameText, nameCursor, () => {
                typeWriter(heroTitle, titleText, titleCursor);
            });
        }, 3500);
    }

    // Quote Typewriter Effect
    function initQuoteTypewriter() {
        const quoteText = document.getElementById('quote-text');
        if (!quoteText) return;

        const quote = "Quality is not an act, it is a habit. I believe in building robust test automation frameworks that ensure reliable software delivery.";

        function typeQuote() {
            quoteText.textContent = '';
            let index = 0;

            function type() {
                if (index < quote.length) {
                    quoteText.textContent += quote.charAt(index);
                    index++;
                    setTimeout(type, 50);
                }
            }
            type();
        }

        // Start quote typing after other animations
        setTimeout(typeQuote, 4500);
    }

    // Navigation Functionality
    function initNavigation() {
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            updateActiveNavLink();
        });

        // Smooth scrolling for nav links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }

                // Close mobile menu if open
                closeMobileMenu();
            });
        });

        function updateActiveNavLink() {
            const scrollPosition = window.scrollY + 150;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (correspondingLink) {
                        correspondingLink.classList.add('active');
                    }
                }
            });
        }
    }

    // Scroll-triggered Animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Trigger specific animations based on element type
                    if (entry.target.classList.contains('skill-category')) {
                        animateSkillProgress(entry.target);
                    }

                    if (entry.target.classList.contains('project-card')) {
                        animateProjectStats(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe all animated elements
        const animatedElements = document.querySelectorAll(`
            .section-animate,
            .card-animate,
            .skill-category,
            .project-card,
            .timeline-item
        `);

        animatedElements.forEach((element, index) => {
            element.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(element);
        });
    }

    // Statistics Counter Animation
    function initStatisticsCounters() {
        const statCards = document.querySelectorAll('.stat-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const targetValue = parseInt(card.getAttribute('data-stat'));
                    const numberElement = card.querySelector('.stat-number');

                    if (numberElement && !card.classList.contains('animated')) {
                        card.classList.add('animated');
                        animateCounter(numberElement, targetValue);
                    }
                }
            });
        }, { threshold: 0.5 });

        statCards.forEach(card => observer.observe(card));
    }

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const isPlus = element.parentElement.querySelector('.stat-label').textContent.includes('Projects');

        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = isPlus ? target + '+' : target;
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 40);
    }

    // Skill Progress Bar Animations
    function initSkillAnimations() {
        // This will be triggered by the scroll observer
    }

    function animateSkillProgress(skillCategory) {
        const progressBar = skillCategory.querySelector('.progress-bar');
        const progressText = skillCategory.querySelector('.progress-text');

        if (progressBar && progressText && !skillCategory.classList.contains('animated')) {
            skillCategory.classList.add('animated');
            const targetProgress = parseInt(progressBar.getAttribute('data-progress'));
            let currentProgress = 0;

            const progressInterval = setInterval(() => {
                if (currentProgress < targetProgress) {
                    currentProgress += 2;
                    progressBar.style.width = `${currentProgress}%`;
                    progressText.textContent = `${currentProgress}%`;
                } else {
                    clearInterval(progressInterval);
                }
            }, 50);
        }
    }

    // Project Statistics Animation
    function initProjectStats() {
        // This will be triggered by the scroll observer
    }

    function animateProjectStats(projectCard) {
        const statNumbers = projectCard.querySelectorAll('.stat-number');

        if (!projectCard.classList.contains('stats-animated')) {
            projectCard.classList.add('stats-animated');

            statNumbers.forEach(statNumber => {
                const target = parseInt(statNumber.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;

                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        statNumber.textContent = target;
                        clearInterval(counter);
                    } else {
                        statNumber.textContent = Math.floor(current);
                    }
                }, 50);
            });
        }
    }

    // Form Animations and Handling
    function initFormAnimations() {
        const form = document.getElementById('contact-form');
        const formControls = document.querySelectorAll('.form-control');

        if (!form) return;

        // Focus animations for form inputs
        formControls.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const name = formData.get('name')?.trim();
            const email = formData.get('email')?.trim();
            const message = formData.get('message')?.trim();

            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.querySelector('.btn-text').textContent;

            submitButton.querySelector('.btn-text').textContent = 'Sending...';
            submitButton.disabled = true;

            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
                submitButton.querySelector('.btn-text').textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        // ✅ Resume Download Popup Logic
        const downloadBtn = document.getElementById('downloadBtn');
        const emailPopup = document.getElementById('emailPopup');  // ✅ must define this
        const closePopup = document.getElementById('closePopup');
        const submitEmail = document.getElementById('submitEmail');
        const emailInput = document.getElementById('emailInput');

        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                emailPopup.style.display = 'block';
            });
        }

        if (closePopup) {
            closePopup.addEventListener('click', () => {
                emailPopup.style.display = 'none';
            });
        }

        if (submitEmail) {
            submitEmail.addEventListener('click', () => {
                const email = emailInput.value;
                if (email) {
                    console.log("📩 Email captured:", email);
                    emailPopup.style.display = 'none';  // ✅ now no redline

                    // ✅ Trigger the resume download
                    const link = document.createElement('a');
                    link.href = 'Nehal_Singh_Parmar_resume.pdf';
                    link.download = 'Nehal_Singh_Parmar_resume.pdf';
                    link.click();
                } else {
                    alert('Please enter a valid email!');
                }
            });
        }



        function showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = `notification notification--${type}`;

            const isSuccess = type === 'success';
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                left: 20px;
                max-width: 500px;
                margin: 0 auto;
                z-index: 10001;
                padding: 20px 25px;
                border-radius: 12px;
                background: ${isSuccess ? 'rgba(50, 184, 198, 0.1)' : 'rgba(255, 84, 89, 0.1)'};
                border: 2px solid ${isSuccess ? 'rgba(50, 184, 198, 0.5)' : 'rgba(255, 84, 89, 0.5)'};
                color: ${isSuccess ? 'rgba(50, 184, 198, 1)' : 'rgba(255, 84, 89, 1)'};
                backdrop-filter: blur(20px);
                transform: translateY(-100px);
                opacity: 0;
                transition: all 0.4s ease;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                font-weight: 600;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            `;

            notification.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 20px;">${isSuccess ? '✅' : '❌'}</span>
                    <span>${message}</span>
                </div>
                <button style="
                    background: none;
                    border: none;
                    color: inherit;
                    font-size: 24px;
                    cursor: pointer;
                    padding: 0;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='none'">&times;</button>
            `;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.transform = 'translateY(0)';
                notification.style.opacity = '1';
            }, 100);

            const closeButton = notification.querySelector('button');
            closeButton.addEventListener('click', () => {
                notification.style.transform = 'translateY(-100px)';
                notification.style.opacity = '0';
                setTimeout(() => notification.remove(), 400);
            });

            setTimeout(() => {
                notification.style.transform = 'translateY(-100px)';
                notification.style.opacity = '0';
                setTimeout(() => notification.remove(), 400);
            }, 5000);
        }
    }

    // Button Ripple Effects
    function initButtonRipples() {
        const glowButtons = document.querySelectorAll('.glow-btn');

        glowButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = button.querySelector('.btn-ripple');
                if (!ripple) return;

                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);

                ripple.style.width = size + 'px';
                ripple.style.height = size + 'px';
                ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

                ripple.style.transform = 'translate(0, 0) scale(0)';
                ripple.style.opacity = '0.6';

                requestAnimationFrame(() => {
                    ripple.style.transform = 'translate(0, 0) scale(4)';
                    ripple.style.opacity = '0';
                });
            });
        });
    }

    // Mobile Menu Functionality
    function initMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Close menu on resize if screen becomes larger
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
    }

    function closeMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        }
    }

    // Parallax Effects
    function initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero-bg-animation, .background-particles');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    // Floating Shapes Animation
    function initFloatingShapes() {
        const shapes = document.querySelectorAll('.shape');

        shapes.forEach((shape, index) => {
            // Add mouse interaction
            shape.addEventListener('mouseenter', () => {
                shape.style.transform = 'scale(1.2) rotate(180deg)';
                shape.style.background = 'linear-gradient(45deg, rgba(50, 184, 198, 0.3), rgba(33, 128, 141, 0.3))';
            });

            shape.addEventListener('mouseleave', () => {
                shape.style.transform = '';
                shape.style.background = '';
            });
        });
    }

    // Start main animations after loading
    function startMainAnimations() {
        // Animate hero elements
        setTimeout(() => {
            const heroElements = document.querySelectorAll('.animate-in');
            heroElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 500);

        // Start background animations
        document.body.classList.add('animations-started');
    }

    // Performance optimizations
    let ticking = false;

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }

    function updateAnimations() {
        // Update any frame-based animations here
        ticking = false;
    }

    // Intersection Observer for performance
    const performanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.willChange = 'transform, opacity';
            } else {
                entry.target.style.willChange = 'auto';
            }
        });
    });

    // Observe performance-sensitive elements
    document.querySelectorAll('.card-animate, .project-card, .skill-category, .stat-card').forEach(el => {
        performanceObserver.observe(el);
    });

    // Reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        document.body.classList.add('reduced-motion');

        // Disable heavy animations for users who prefer reduced motion
        const style = document.createElement('style');
        style.textContent = `
            .reduced-motion *,
            .reduced-motion *::before,
            .reduced-motion *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Mouse movement effects for interactive elements
    const interactiveElements = document.querySelectorAll('.about-card, .project-card, .skill-category, .stat-card');

    interactiveElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            if (prefersReducedMotion.matches) return;

            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Smooth scroll polyfill for older browsers
    if (!('scrollBehavior' in document.documentElement.style)) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
        document.head.appendChild(script);
    }

    // Initialize scroll position
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
    });

    // Add loading class removal after everything is ready
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }

        // Tab navigation for interactive elements
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add focus styles for keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
        .keyboard-navigation *:focus {
            outline: 2px solid rgba(50, 184, 198, 0.8) !important;
            outline-offset: 2px !important;
        }
    `;
    document.head.appendChild(style);

    // Skill badges interaction
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach(badge => {
        badge.addEventListener('click', () => {
            // Add click effect
            badge.style.transform = 'scale(0.95)';
            setTimeout(() => {
                badge.style.transform = '';
            }, 150);
        });
    });

    // Achievement items hover effect
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const marker = item.querySelector('.achievement-marker');
            if (marker) {
                marker.style.transform = 'scale(1.5)';
                marker.style.boxShadow = '0 0 20px rgba(50, 184, 198, 0.8)';
            }
        });

        item.addEventListener('mouseleave', () => {
            const marker = item.querySelector('.achievement-marker');
            if (marker) {
                marker.style.transform = '';
                marker.style.boxShadow = '';
            }
        });
    });

    // Social links hover animations
    const socialLinks = document.querySelectorAll('.social-link-hero');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('.social-icon');
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(15deg)';
            }
        });

        link.addEventListener('mouseleave', () => {
            const icon = link.querySelector('.social-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
});
