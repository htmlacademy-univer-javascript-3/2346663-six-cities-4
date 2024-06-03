import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loader/loader';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state[NameSpace.Loading].isOffersDataLoading);
  if (isOffersDataLoading) {
    return (<LoadingScreen/>);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main/>}></Route>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites/>
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
