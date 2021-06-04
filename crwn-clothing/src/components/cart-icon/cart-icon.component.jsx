import React from 'react';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../state/cart/cart.actions';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  //selector
  itemCount: cartItems.reduce((total, item) => total + item.quantity, 0),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
