const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

// Generate a unique identifier for each recipe page
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// MongoDB connection URI (replace it with your MongoDB connection string)
const mongoURI = 'mongodb://localhost:27017/recipe-generator';

// Create a MongoDB client and connect to the database
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
}

connectToDatabase();

// Your backend code goes here

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

// API endpoint to get possible ingredients
app.get('/api/ingredients', async (req, res) => {
  const ingredients = await getIngredientsFromDatabase();
  res.json(ingredients);
});

// Generate a unique identifier for each recipe page
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Retrieve possible ingredients from the database
async function getIngredientsFromDatabase() {
  const db = client.db();
  const collection = db.collection('ingredients');
  const result = await collection.distinct('name');
  return result;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});