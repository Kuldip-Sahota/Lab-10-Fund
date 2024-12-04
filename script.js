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
document.addEventListener('DOMContentLoaded', () => {
    // Filter buttons and projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    // Add event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;

            // Filter projects based on category
            projects.forEach(project => {
                if (category === 'all' || project.dataset.category === category) {
                    project.style.display = 'block'; // Show the project
                } else {
                    project.style.display = 'none'; // Hide the project
                }
            });
        });
    });
});
