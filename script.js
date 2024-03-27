document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.variable').forEach(element => {
      element.addEventListener('mouseover', function() {
        const definition = this.getAttribute('data-definition');
        const tooltip = document.createElement('div');
        tooltip.innerHTML = definition;
        tooltip.className = 'popup'; // Start without fade-in class
        document.body.appendChild(tooltip);
  
        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
        tooltip.style.display = 'block'; // Make sure the tooltip is visible before fading in
        setTimeout(() => tooltip.classList.add('fade-in'), 0); // Add fade-in class after ensuring it's displayed
  
        this.addEventListener('mouseout', function() {
          tooltip.classList.replace('fade-in', 'fade-out');
          setTimeout(() => tooltip.remove(), 500); // Ensure animation completes before remove
        });
      });
    });
  });
  