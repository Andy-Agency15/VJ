// Initialize Lucide icons
lucide.createIcons();

// Enhanced glitch effects for hero titles
let glitchActive = false;
let superGlitch = false;

function triggerGlitch() {
    glitchActive = true;
    const videoTitle = document.getElementById('video-title');
    const jamesTitle = document.getElementById('james-title');
    
    if (videoTitle) videoTitle.classList.add('glitch-effect');
    if (jamesTitle) jamesTitle.classList.add('glitch-effect');
    
    setTimeout(() => {
        glitchActive = false;
        if (videoTitle) videoTitle.classList.remove('glitch-effect');
        if (jamesTitle) jamesTitle.classList.remove('glitch-effect');
    }, 300);
}

function triggerSuperGlitch() {
    superGlitch = true;
    const videoTitle = document.getElementById('video-title');
    const jamesTitle = document.getElementById('james-title');
    
    if (videoTitle) {
        videoTitle.classList.add('glitch-effect');
        videoTitle.style.filter += ' hue-rotate(180deg)';
    }
    if (jamesTitle) {
        jamesTitle.classList.add('glitch-effect');
        jamesTitle.style.filter += ' saturate(200%) brightness(150%)';
    }
    
    setTimeout(() => {
        superGlitch = false;
        if (videoTitle) {
            videoTitle.classList.remove('glitch-effect');
            videoTitle.style.filter = videoTitle.style.filter.replace(' hue-rotate(180deg)', '');
        }
        if (jamesTitle) {
            jamesTitle.classList.remove('glitch-effect');
            jamesTitle.style.filter = jamesTitle.style.filter.replace(' saturate(200%) brightness(150%)', '');
        }
    }, 150);
}

// Set intervals for glitch effects
setInterval(() => {
    if (Math.random() > 0.7) triggerGlitch();
}, 4000 + Math.random() * 8000);

setInterval(() => {
    if (Math.random() > 0.8) triggerSuperGlitch();
}, 15000 + Math.random() * 20000);

// Play button functionality
let isPlaying = false;
const playButton = document.getElementById('play-button');
const playIcon = document.getElementById('play-icon');
const playText = document.getElementById('play-text');

if (playButton && playIcon && playText) {
    playButton.addEventListener('click', () => {
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            playIcon.setAttribute('data-lucide', 'pause');
            playIcon.classList.remove('animate-bounce');
            playIcon.classList.add('animate-spin');
            playText.textContent = 'PAUSE';
        } else {
            playIcon.setAttribute('data-lucide', 'play');
            playIcon.classList.remove('animate-spin');
            playIcon.classList.add('animate-bounce');
            playText.textContent = 'PLAY';
        }
        
        // Reinitialize icons after changing
        lucide.createIcons();
    });
}

// Generate floating particles
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    const footerParticlesContainer = document.getElementById('footer-particles');
    
    // Main floating particles
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full animate-bounce pointer-events-none';
        
        const colors = ['bg-neon-pink', 'bg-neon-cyan', 'bg-neon-purple', 'bg-neon-orange'];
        const sizes = ['w-2 h-2', 'w-3 h-3', 'w-4 h-4', 'w-5 h-5', 'w-6 h-6'];
        
        particle.classList.add(colors[i % 4]);
        particle.classList.add(sizes[i % 5]);
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (1 + Math.random() * 3) + 's';
        particle.style.filter = 'blur(0.5px)';
        particle.style.boxShadow = `0 0 10px currentColor`;
        
        if (particlesContainer) {
            particlesContainer.appendChild(particle);
        }
    }

    // Footer particles
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-3 h-3 rounded-full animate-bounce pointer-events-none opacity-60';
        
        const colors = ['bg-neon-pink', 'bg-neon-cyan', 'bg-neon-purple', 'bg-neon-orange'];
        particle.classList.add(colors[i % 4]);
        
        particle.style.left = (10 + (i * 12)) + '%';
        particle.style.top = (20 + Math.random() * 60) + '%';
        particle.style.animationDelay = (i * 0.5) + 's';
        particle.style.animationDuration = (2 + Math.random() * 2) + 's';
        
        if (footerParticlesContainer) {
            footerParticlesContainer.appendChild(particle);
        }
    }
}

// Smooth scrolling for any anchor links (if added later)
document.addEventListener('DOMContentLoaded', () => {
    createFloatingParticles();
    
    // Add smooth scrolling to any anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.vhs-label, .retro-button, .payment-item, .spec-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = element.style.transform + ' scale(1.05)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = element.style.transform.replace(' scale(1.05)', '');
        });
    });
});

// Add some interactive sound-like visual feedback
function createSoundWave() {
    const soundElements = document.querySelectorAll('[data-lucide="volume-2"]');
    soundElements.forEach(element => {
        element.addEventListener('click', () => {
            // Create a visual "sound wave" effect
            const wave = document.createElement('div');
            wave.className = 'absolute w-4 h-4 rounded-full bg-neon-cyan animate-ping pointer-events-none';
            wave.style.left = '50%';
            wave.style.top = '50%';
            wave.style.transform = 'translate(-50%, -50%)';
            wave.style.animationDuration = '0.5s';
            
            const parent = element.closest('.relative') || element.parentElement;
            if (parent) {
                parent.style.position = 'relative';
                parent.appendChild(wave);
                
                setTimeout(() => {
                    wave.remove();
                }, 500);
            }
        });
    });
}

// Initialize sound wave effects after DOM load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(createSoundWave, 100); // Small delay to ensure lucide icons are rendered
});

// Add some keyboard shortcuts for fun
document.addEventListener('keydown', (e) => {
    // Press 'G' for glitch effect
    if (e.key.toLowerCase() === 'g') {
        triggerGlitch();
    }
    
    // Press 'S' for super glitch
    if (e.key.toLowerCase() === 's') {
        triggerSuperGlitch();
    }
    
    // Press spacebar to toggle play (if play button exists)
    if (e.code === 'Space' && playButton) {
        e.preventDefault();
        playButton.click();
    }
});

// Add some random color shifts for extra synthwave feel
function randomColorShift() {
    const elements = document.querySelectorAll('.chrome-text');
    elements.forEach(element => {
        if (Math.random() > 0.95) {
            element.style.filter += ' hue-rotate(' + (Math.random() * 60 - 30) + 'deg)';
            setTimeout(() => {
                element.style.filter = element.style.filter.replace(/hue-rotate\([^)]+\)/g, '');
            }, 200);
        }
    });
}

setInterval(randomColorShift, 2000);

// Add particle trail on mouse move
let mouseTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.7) { // Only create particles occasionally
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 rounded-full pointer-events-none';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.position = 'fixed';
        particle.style.zIndex = '9999';
        
        const colors = ['bg-neon-pink', 'bg-neon-cyan', 'bg-neon-purple', 'bg-neon-orange'];
        particle.classList.add(colors[Math.floor(Math.random() * colors.length)]);
        particle.style.opacity = '0.6';
        particle.style.animation = 'ping 0.5s cubic-bezier(0, 0, 0.2, 1)';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 500);
    }
});

// Add screen shake effect for intense moments
function screenShake() {
    document.body.style.animation = 'glitch 0.1s infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 300);
}

// Trigger screen shake randomly
setInterval(() => {
    if (Math.random() > 0.98) {
        screenShake();
    }
}, 5000);

// Add dynamic background color shifts
function backgroundColorShift() {
    const root = document.documentElement;
    const hueShift = Math.sin(Date.now() * 0.001) * 30;
    root.style.filter = `hue-rotate(${hueShift}deg)`;
}

setInterval(backgroundColorShift, 100);

// Add typing effect to contact information
function typeWriter(element, text, speed = 50) {
    element.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add click-to-copy functionality for contact info
document.addEventListener('DOMContentLoaded', () => {
    const contactValues = document.querySelectorAll('.contact-value');
    contactValues.forEach(element => {
        element.addEventListener('click', () => {
            const text = element.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Visual feedback
                const originalText = element.textContent;
                element.textContent = 'COPIED!';
                element.style.color = 'hsl(var(--neon-orange))';
                
                setTimeout(() => {
                    element.textContent = originalText;
                    element.style.color = '';
                }, 1000);
            });
        });
    });
});

// Add easter egg console messages
const easterEggs = [
    "You found the secret console! 🎮",
    "Welcome to the neon underground! ⚡",
    "The future is now, voice actor! 🎤",
    "Retrowave vibes detected! 🌊",
    "Keep exploring the digital realm! 💫"
];

document.addEventListener('DOMContentLoaded', () => {
    console.log(easterEggs[Math.floor(Math.random() * easterEggs.length)]);
});

// Console easter egg
console.log(`
╔═══════════════════════════════════════╗
║          VIDEO JAMES                  ║
║    Broadcasting from the Neon Future ║
║                                       ║
║    Press 'G' for glitch effect        ║
║    Press 'S' for super glitch         ║
║    Press SPACE to play/pause          ║
║    Click contact info to copy         ║
║    Move mouse for particle trail      ║
╚═══════════════════════════════════════╝
`);

// Performance optimization: Throttle mouse events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    // Add a subtle loading effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add dynamic favicon change
function changeFavicon() {
    const colors = ['🎤', '🎵', '⚡', '🌊', '💫'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // This would need an actual favicon file to work properly
    // For now, it's just a placeholder for the concept
    document.title = `${randomColor} Video James - Voice Actor`;
}

setInterval(changeFavicon, 10000);

// Add section intersection observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.5s ease forwards';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add CSS for fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);