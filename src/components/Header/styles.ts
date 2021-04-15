import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100% 

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Linked = styled(Link)`
  margin: 50px 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  display: block;
  font-family: 'Raleway',sans-serif;
  color: #fff;
  font-size: 30px;
  font-weight: bold;

  }

`

export const Cart = styled(Link)`
  margin: 50px 30px;
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: black;
    }

    span {
      font-size: 12px;
      color: #222
    }
  }
`;
