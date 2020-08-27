export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, qty } = state;

  let product;
  let index;
  let updatedPrice;
  let updatedQty;

  if (action.type === 'ADD_TO_CART') {
    const check = shoppingCart.find((product) => product.id === action.id);
    if (check) {
      return {
        shoppingCart: [...shoppingCart],
        totalPrice,
        message: 'This is product is already in the cart!',
        qty,
      };
    } else {
      product = action.product;
      product['qty'] = 1;
      updatedQty = qty + 1;
      updatedPrice = totalPrice + product.price;
      return {
        shoppingCart: [product, ...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
    }
  } else if (action.type === 'INC') {
    product = shoppingCart.find((product) => product.id === action.id);
    index = shoppingCart.findIndex((product) => product.id === action.id);
    product.qty = product.qty + 1;
    updatedQty = qty + 1;
    updatedPrice = totalPrice + product.price;
    shoppingCart[index] = product;
    return {
      shoppingCart: [...shoppingCart],
      totalPrice: updatedPrice,
      message: '',
      qty: updatedQty,
    };
  } else if (action.type === 'DEC') {
    product = shoppingCart.find((product) => product.id === action.id);
    index = shoppingCart.findIndex((product) => product.id === action.id);
    if (product.qty > 1) {
      product.qty = product.qty - 1;
      updatedPrice = totalPrice - product.price;
      updatedQty = qty - 1;
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        message: '',
        qty: updatedQty,
      };
    } else if (action.type === 'empty') {
      return { shoppingCart: [], totalPrice: 0, message: '', qty: 0 };
    } else {
      return { shoppingCart: [...shoppingCart], totalPrice: totalPrice, message: '', qty: qty };
    }
  } else if (action.type === 'DEL') {
    const filtered = shoppingCart.filter((cart) => cart.id !== action.id);
    product = shoppingCart.find((cart) => cart.id === action.id);
    updatedPrice = totalPrice - product.price * product.qty;
    updatedQty = qty - product.qty;
    return { shoppingCart: [...filtered], totalPrice: updatedPrice, message: '', qty: updatedQty };
  } else return state;
};
