/**
 * OrderItem.js
 *
 * A many to many table to have multiple orders with mutliple items.
 */

module.exports = {
    attributes: {
      order: { model: 'order' },
      item: { model: 'item' },
      quantity: { type: 'number', required: true }
    }
  }
  