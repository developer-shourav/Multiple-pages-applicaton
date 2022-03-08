
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Switch>
        <Route path="/"> 
          <Home> </Home>
        </Route>

        <Route path="home"> 
        <Home> </Home>
        </Route>

        <Route path="friends">
           <Friends> </Friends>
         </Route>

         <Route path="about">
           <About> </About>
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
