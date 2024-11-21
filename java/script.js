document.addEventListener('DOMContentLoaded', () => {

    const projectDetails = document.querySelectorAll('.project-details');
    const toggleButtons = document.querySelectorAll('.toggle-details');

    
    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            
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
