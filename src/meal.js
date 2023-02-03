function nameMenuItem(foodType) {
  return `Delicious ${foodType}`;
}

function createMenuItem(menuItemName, foodPrice, mealType) {
  var menuItem = {
    name: menuItemName,
    price: foodPrice,
    type: mealType,
  } 
  return menuItem;
}

function addIngredients(cheese, ingredients) {
  if (!ingredients.includes(cheese)) {
    ingredients.push(cheese);
  }
} 

function formatPrice(price) {
  var formattedPrice = (`$${price}`);
  return formattedPrice;
}

function decreasePrice(price) {
   var price = 5.4;
   return price;
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


