document.addEventListener('DOMContentLoaded', () => {
    const recipeIdElement = document.getElementById('recipeId');
    const pathArray = window.location.pathname.split('/');
    const recipeId = pathArray[pathArray.length - 1];
    recipeIdElement.textContent = recipeId;
  });
  