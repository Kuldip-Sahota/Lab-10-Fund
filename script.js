document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const projectDetails = document.querySelectorAll('.project-details');
    const toggleButtons = document.querySelectorAll('.toggle-details-btn'); // Match the class name
    const toggleThemeButton = document.getElementById('toggleTheme'); // Get the dark mode toggle button

    // Check if buttons and elements exist
    console.log('Project details:', projectDetails);
    console.log('Toggle buttons:', toggleButtons);

    // Event listener for project details toggle
    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log(`Button clicked: ${index}`);
            if (projectDetails[index].classList.contains('hidden')) {
                projectDetails[index].classList.remove('hidden');
                button.textContent = 'Hide Details';
            } else {
                projectDetails[index].classList.add('hidden');
                button.textContent = 'Show Details';
            }
        });
    });

    // Dark mode toggle functionality
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');  // Toggle the dark mode class
            toggleThemeButton.classList.toggle('dark-mode');  // Optional: change button appearance in dark mode
        });
    }
});
