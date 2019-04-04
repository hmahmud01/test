import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import App from '../App/index';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div>
                <h3>Login</h3>
                <button>
                    <Switch>
                        <Route path='/' component={App} />
                    </Switch>
                </button>
            </div>
        );

    }

}

export default Login;