import React, {
    Component
} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/react-router/Menu';
import routes from './routes';

class App extends Component {
    showContentMenu = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.main}
                    >
                    </Route>
                )
            });
        }
        return result;
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Menu></Menu>
                    <Switch>
                        {/* <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/contact" component={Contact}></Route>
                        <Route component={NotFound}></Route> */}
                        {this.showContentMenu(routes)}
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;