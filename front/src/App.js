import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import LoginPage from './Pages/LoginPage/LoginPage';
import ContentPage from './Pages/ContentPage/ContentPage';
import {useEffect} from "react";
import {getProfileAC} from "./redux/actionCreators";
import {useDispatch} from "react-redux";

function App() {
    const dispatch=useDispatch()
    useEffect(
        ()=>
        dispatch(getProfileAC())
    ,[])
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
