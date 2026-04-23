/**
 * Bac IA - Application Core Logic
 * Handles state persistence and navigation transitions.
 */

const BacIA = {
    KEYS: {
        ROLE: 'bacia_role',
        LEVEL: 'bacia_level',
        STREAM: 'bacia_stream',
        LANGUAGE: 'bacia_language',
        SUBJECTS: 'bacia_subjects'
    },

    save: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },

    get: (key) => {
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : null;
    },

    navigate: (url) => {
        if (!url || url === '#' || url === 'javascript:void(0)') return;
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    },

    init: () => {
        // Add fade-out style if not present
        if (!document.getElementById('bacia-app-styles')) {
            const style = document.createElement('style');
            style.id = 'bacia-app-styles';
            style.innerHTML = `
                body { transition: opacity 0.3s ease; opacity: 1; }
                body.fade-out { opacity: 0; }
            `;
            document.head.appendChild(style);
        }

        // Hook all links
        document.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    BacIA.navigate(href);
                });
            }
        });

        console.log("[Bac IA] App initialized.");
    }
};

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', BacIA.init);
} else {
    BacIA.init();
}
