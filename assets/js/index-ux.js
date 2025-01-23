// Function to toggle the Beats form visibility
function toggleBeatsForm() {
    const beatsModal = document.getElementById('beatsModal');
    const pluginsModal = document.getElementById('pluginsModal');

    // If Beats modal is visible, close it with slide-out effect to the left
    if (beatsModal.style.display === 'block') {
        beatsModal.classList.add('closing');
        setTimeout(() => {
            beatsModal.style.display = 'none';
            beatsModal.classList.remove('active', 'closing');
        }, 500); // Ensure the sliding animation completes before hiding
        
    } else {
        // If Plugins modal is visible, close it with slide-out effect to the right
        if (pluginsModal.style.display === 'block') {
            pluginsModal.classList.add('closing');
            setTimeout(() => {
                pluginsModal.style.display = 'none';
                pluginsModal.classList.remove('active', 'closing');
            }, 500); // Ensure the sliding animation completes before hiding
            
        }
        // Show Beats modal with animation from left
        beatsModal.style.display = 'block';
        beatsModal.classList.add('active');
    }
}

// Function to toggle the Plugins form visibility
function togglePluginsForm() {
    const pluginsModal = document.getElementById('pluginsModal');
    const beatsModal = document.getElementById('beatsModal');
    
    // If Plugins modal is visible, close it with slide-out effect to the right
    if (pluginsModal.style.display === 'block') {
        pluginsModal.classList.add('closing');
        setTimeout(() => {
            pluginsModal.style.display = 'none';
            pluginsModal.classList.remove('active', 'closing');
        }, 500); // Ensure the sliding animation completes before hiding
        
    } else {
        // If Beats modal is visible, close it with slide-out effect to the left
        if (beatsModal.style.display === 'block') {
            beatsModal.classList.add('closing');
            setTimeout(() => {
                beatsModal.style.display = 'none';
                beatsModal.classList.remove('active', 'closing');
            }, 500); // Ensure the sliding animation completes before hiding
            
        }
        // Show Plugins modal with animation from right
        pluginsModal.style.display = 'block';
        pluginsModal.classList.add('active');
    }
}
