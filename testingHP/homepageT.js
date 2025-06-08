// Select all discs and buttons
const discs = document.querySelectorAll('.disc');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Define the angles for the circular positions
const positions = [0, 60, 120, 180, 240, 300];

// Function to update the positions of the discs
function updatePositions() {
  discs.forEach((disc, index) => {
    const angle = positions[index];
    disc.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
  });
}

// Function to cycle forward
function cycleForward() {
  positions.unshift(positions.pop()); // Move the last position to the front
  updatePositions();
}

// Function to cycle backward
function cycleBackward() {
  positions.push(positions.shift()); // Move the first position to the end
  updatePositions();
}

// Add event listeners to the buttons
prevButton.addEventListener('click', cycleBackward);
nextButton.addEventListener('click', cycleForward);

// Initialize positions
updatePositions();