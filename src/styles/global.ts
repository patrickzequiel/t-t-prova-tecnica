import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  :root {
    --background: #EBEBEB;
    --text-title: #3D3D4D;
    --text: #1C1C29;
    --text-light: #A09CB1;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    /* background-color: #fff; */
    /* background: linear-gradient(135deg, #8254EA 2%, #E86DEC 100%);
    -webkit-font-smoothing: antialiased; */
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
