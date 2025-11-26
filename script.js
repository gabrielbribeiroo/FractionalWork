document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Waitlist Form Handling
    const form = document.getElementById('waitlist-form');
    const message = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate API call
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Joining...';
            btn.disabled = true;

            // Collect form data for demo purposes
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form Submitted:', data);

            setTimeout(() => {
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
                message.classList.remove('hidden');

                // Hide message after 5 seconds
                setTimeout(() => {
                    message.classList.add('hidden');
                }, 5000);
            }, 1500);
        });
    }

    // Intersection Observer for Fade-in Animations (Optional polish)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply simple fade-in to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});
