
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home" ;
import Friends from "./components/Friends/Friends" ;
import About from "./components/About/About" ;
import NotFound from './components/NotFound/NotFound' ;
import "./App.css";
import Development from "./components/Development/Development";

function App() {
  return (
    <div className="App">
     <BrowserRouter> 
     <Switch> 
       <Route exact path="/"> 
         <Home> </Home> 
       </Route>

       <Route exact path="/home"> 
         <Home> </Home>
       </Route>

       <Route exact path="/friends"> 
         <Friends> </Friends>
       </Route>

       <Route exact path="/about"> 
         <About> </About>
       </Route> 

       <Route exact path="/development">
          <Development> </Development>
       </Route>

       <Route path="*"> 
         <NotFound> </NotFound>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;