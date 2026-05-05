function toggleRules() {
    const modal = document.getElementById('rulesModal');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('rulesModal');
    if (event.target == modal) { toggleRules(); }
}

window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-slate-950', 'shadow-2xl');
    } else {
        nav.classList.remove('bg-slate-950', 'shadow-2xl');
    }
};

console.log("ALNA STORE v2.0: Online");
