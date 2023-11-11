// This document handles the frontend logic for the app!

document.addEventListener('DOMContentLoaded', () => {
  // Fetch possible ingredients from the server
  fetch('/api/ingredients')
    .then(response => response.json())
    .then(data => {
      // Initialize the selectize plugin on the ingredients input field
      $('#ingredients').selectize({
        options: data,
        create: true,
        placeholder: 'Type to search ingredients',
      });
    });

  // Attach the generateRecipe function to the click event of the button
  document.getElementById('generateButton').addEventListener('click', () => {
    console.log('Generating recipe...');
    window.location.href = '/generate';
  });
});