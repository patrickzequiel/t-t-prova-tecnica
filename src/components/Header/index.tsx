import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart, Linked } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
        <Linked to="/">
          HOME
        </Linked>
        <Linked to="/product">
          PRODUTOS
        </Linked>

        <Linked to="/cart">
          CARRINHOS
        </Linked>

      {/* <Cart to="/cart">
        <div>
          <strong>CARRINHO</strong> */}
          {/* <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span> */}
        {/* </div> */}
        {/* <MdShoppingBasket size={36} color="#FFF" /> */}
      {/* </Cart> */}
    </Container>
  );
};

export default Header;
