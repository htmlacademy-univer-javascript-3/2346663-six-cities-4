import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { OfferType } from '../../mocks/offers';

type AppProps = {
  offers: OfferType[];
}

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main/>}></Route>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites offers={offers}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<Offer/>}/>
        <Route path="*" element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
