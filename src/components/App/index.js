import React from 'react';
import Nav from '../Nav/index';
import Main from '../Main/index';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nav : "This is Navbar",
            main : "This is Main container to show"
        }
    }

    render(){
        return(
            <div>
                <Nav title={this.state.nav}/>
                <Main title={this.state.main}/>
            </div>
        );
    }
        
}

export default App;