import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render(){
        return (
            <header>
                <nav>
                    <ul>
                        <li>{ this.props.title }</li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/credit'>credit</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Nav;