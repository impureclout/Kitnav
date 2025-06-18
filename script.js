// Future JavaScript can be added here for animations or other interactive features.
document.addEventListener('DOMContentLoaded', () => {
    console.log('Kitchen Navigator website loaded!');

    // Modal functionality
    const donateModal = document.getElementById('donate-modal');
    const donateButton = document.getElementById('donate-button');
    const closeButton = document.querySelector('.close-button');

    // Function to open the modal
    const openModal = () => {
        if (donateModal) {
            donateModal.style.display = 'block';
        }
    };

    // Function to close the modal
    const closeModal = () => {
        if (donateModal) {
            donateModal.style.display = 'none';
        }
    };

    // Open the modal when the donate button is clicked
    if (donateButton) {
        donateButton.addEventListener('click', openModal);
    }

    // Close the modal when the close button (x) is clicked
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Close the modal when the user clicks outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target == donateModal) {
            closeModal();
        }
    });

    // Check if the URL has #donate, and if so, open the modal
    // This is for the links from terms.html and privacy.html
    if (window.location.hash === '#donate') {
        openModal();
    }
}); 