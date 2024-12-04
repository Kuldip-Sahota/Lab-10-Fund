document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const projectDetails = document.querySelectorAll('.project-details');
    const toggleButtons = document.querySelectorAll('.toggle-details-btn'); // Match the class name

    console.log('Project details:', projectDetails);
    console.log('Toggle buttons:', toggleButtons);

    if (toggleButtons.length === 0) {
        console.error('No buttons found. Check your HTML classes.');
    }

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
});
