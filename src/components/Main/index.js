import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/index';
import About from '../About/index';
import Credit from '../Credit/index';

class Main extends React.Component {
    render() {
        return(
            <div>
                <p> { this.props.title } </p>       
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/credit' component={Credit}/>
                </Switch>
            </div>
        );
    }
}

export default Main;