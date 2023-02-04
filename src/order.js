function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order)
  }
  return deliveryOrders;
}

function refundOrder(refund, orders) {
  for (i = 0; i < orders.length; i++) {
    if (orders[i].orderNumber === refund) {
      return orders.splice([i], 1)
    }
  }
}

function listItems(deliveryOrders) {
  var items = []
  for (i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item)
  }
  return items.join(', ');
}

function searchOrder(deliveryOrders, itemName) {
  for (i = 0; i < deliveryOrders.length; i++)
    if (deliveryOrders[i].item === itemName) {
    return true
    }
    return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}