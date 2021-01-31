import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import LoginPage from './Pages/LoginPage/LoginPage';
import ContentPage from './Pages/ContentPage/ContentPage';

function App() {
  return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/main' component={ContentPage} />

        </Switch>
      </div>
  );
}

export default App;
