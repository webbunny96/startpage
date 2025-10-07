function getOld() {
    const date_birth = new Date(1996, 10); // Листопад 1996
    const now = new Date();
    const old_span = document.querySelector(".old");
    
    if (old_span) {
        let age = now.getFullYear() - date_birth.getFullYear();
        
        // Точний розрахунок з урахуванням місяців
        const monthDiff = now.getMonth() - date_birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < date_birth.getDate())) {
            age--;
        }
        
        old_span.textContent = age;
    }
}

// Запускаємо після завантаження сторінки
window.addEventListener('load', getOld);