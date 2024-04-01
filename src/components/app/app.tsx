import Main from '../../pages/main/main';
//import Favorites from '../../pages/favorites/favorites';
//import Login from '../../pages/login/login';
//import Offer from '../../pages/offer/offer';

type AppProps = {
  cardCount: number;
}

function App({cardCount}: AppProps): JSX.Element {
  return (
    <Main cardCount={cardCount}/>
    //<Favorites/>
    //<Login/>
    //<Offer/>
  );
}

export default App;
