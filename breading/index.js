const bread = document.querySelector('.bread');

// Variable to check if the animation is completed
let animationCompleted = false;

// Add event listener to trigger the animation once on hover
bread.addEventListener('mouseenter', () => {
  // If animation has already completed, do nothing
  if (animationCompleted) return;

  // Add the class to trigger the animation
  bread.classList.add('animate');

  // Listen for the animation end event to mark it as completed
  bread.addEventListener('animationend', () => {
    animationCompleted = true; // Set flag when animation is complete
  });
});

// To reset and allow the animation to play again on the next hover
bread.addEventListener('animationiteration', () => {
  animationCompleted = false; // Reset flag for next hover
});
