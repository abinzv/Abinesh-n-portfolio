// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal if clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Animated Numbers for QA Dashboard
const stats = document.querySelectorAll('.stat-number');
const animateStats = () => {
    stats.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const increment = target / 50;
        let current = 0;
        
        const updateCount = () => {
            if(current < target) {
                current += increment;
                stat.innerText = Math.ceil(current);
                setTimeout(updateCount, 30);
            } else {
                stat.innerText = target;
            }
        };
        updateCount();
    });
}

// Trigger animation when dashboard is in view
let animated = false;
window.addEventListener('scroll', () => {
    const dashboard = document.getElementById('dashboard');
    const position = dashboard.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(position < screenPosition && !animated) {
        animateStats();
        animated = true;
    }
});