import './App.css';

import Home from './components/Home/Home'
import Head from './components/Head/Head';
import Contact from './components/Contact/Contact';
import Challenges from './components/Challenges/Challenges';
import Footer from './components/Footer/Footer.component';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import ppt from './codeforceppt.pdf';


const App = () => {
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
        <Footer/>
      </Router>
    </div>
  );
}

export default App;