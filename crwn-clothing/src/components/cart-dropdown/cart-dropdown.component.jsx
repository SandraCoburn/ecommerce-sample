import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../state/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  let history = useHistory();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItems.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>
        GO TO CHECKOUT{' '}
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
