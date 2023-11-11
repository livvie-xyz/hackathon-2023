const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Your backend code goes here

// Generate a unique identifier for each recipe page
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Serve the recipe page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  

app.get('/generate', (req, res) => {
  const uniqueId = generateUniqueId();
  res.redirect(`/recipe/${uniqueId}`);
});

// Serve the recipe page
app.get('/recipe/:id', (req, res) => {
  const recipeId = req.params.id;
  res.sendFile(path.join(__dirname, 'public', 'recipe.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});