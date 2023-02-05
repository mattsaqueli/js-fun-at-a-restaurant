
function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant
}

 
function addMenuItem(restaurant, item) {
  if (item.type === 'lunch' && restaurant.menus.lunch.includes(item) === false ) {
    restaurant.menus.lunch.push(item)
  } else if (item.type === 'breakfast' && restaurant.menus.breakfast.includes(item) === false) {
    restaurant.menus.breakfast.push(item)
  } else if (item.type === 'dinner' && restaurant.menus.dinner.includes(item) === false) {
    restaurant.menus.dinner.push(item)
  }
}

function removeMenuItem(restaurant, menuItem, menuName) {
  for (i = 0; i < restaurant.menus[menuName].length; i++) {
    if (restaurant.menus[menuName][i].name === menuItem) {
      restaurant.menus[menuName].splice(i, 1)
      return `No one is eating our ${menuItem} - it has been removed from the ${menuName} menu!`
    } 
  } return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
} 

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}