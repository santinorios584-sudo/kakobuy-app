function switchTab(tabId) {
    // Hide all sections
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Remove active state from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        const iconWrapper = btn.querySelector('.tab-icon-wrapper');
        if (iconWrapper) {
            iconWrapper.classList.remove('bg-[#FF5A5F]', 'text-white', 'px-3', 'py-1', 'rounded-xl');
        }
    });

    // Show selected section
    const targetSection = document.getElementById(`${tabId}-section`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.style.opacity = '0';
        setTimeout(() => {
            targetSection.style.opacity = '1';
        }, 50);
    }

    // Add active state to the selected button
    const targetButton = document.getElementById(`tab-${tabId}`);
    if (targetButton) {
        targetButton.classList.add('active');
        const iconWrapper = targetButton.querySelector('.tab-icon-wrapper');
        if (iconWrapper) {
            iconWrapper.classList.add('bg-[#FF5A5F]', 'text-white', 'px-3', 'py-1', 'rounded-xl');
        }
    }

    // Re-initialize Lucide icons just in case
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Initial call to set the home tab active correctly with the styling
document.addEventListener('DOMContentLoaded', () => {
    switchTab('welcome');
});
