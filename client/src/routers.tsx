import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Boards from './routes/Boards';
import { urls } from './constants/urls';

const MainRouters = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path={urls.boards} component={Boards} />
    </Switch>
  </BrowserRouter>
);

export default MainRouters;
