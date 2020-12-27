import './App.css';

import Home from './components/Home'
import Head from './components/Head';
import Contact from './components/Contact';
import Challenges from './components/Challenges';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import ppt from './codeforceppt.pdf';



function App(){
  return (
    <div className="fullscreen">
      <Router>
        <Head/>
        <Switch>
          <Route path="/challenges"><Challenges/></Route>
          <Route path="/contact"><Contact/></Route>
          <Route path="/"><Home/></Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;