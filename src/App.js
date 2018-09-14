import React, {Component} from 'react';
import ImageTabs from './ImageTabs.jsx'
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>Title of thing</h1>
                <ImageTabs/>
            </div>
        );
        /*
                <HashRouter>
                 <div>

                  <h1>Web dev øving 2</h1>

                  <ul className="header">
                      <li><NavLink exact to="/">Home</NavLink></li>
                      <li><NavLink to="/one">One</NavLink></li>
                      <li><NavLink to="/two">Two</NavLink></li>
                      <li><NavLink to="/three">Three</NavLink></li>
                      <li><NavLink to="/four">Four</NavLink></li>
                  </ul>

                  <div className="content">
                      <Route exact path="/" component={Home}/>
                      <Route path="/one" component={One}/>
                      <Route path="/two" component={Two}/>
                      <Route path="/three" component={Three}/>
                      <Route path="/four" component={Four}/>

                  </div>

                 </div>

                </HashRouter>

          );
        */
    }
}

export default App;
