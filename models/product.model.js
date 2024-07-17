const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Please enter product name'],
    },

    quantity: {
      type: Number,
      require: true,
      default: 0,
    },

    price: {
      type: Number,
      require: true,
      default: 0,
    },

    image: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true, //allow us to have two more extra fields(createdAt and updatedAt)
  }
);

const Product = mongoose.model('Product', ProductSchema); //allow MongoDB to use it

module.exports = Product;
