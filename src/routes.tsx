import { Switch, Route } from 'react-router-dom';

import Home2 from './pages/Home2';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home2} />
      <Route path="/product" component={ProductPage} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
