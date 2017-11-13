import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h1 className="navbar-brand"><a href="/reactfront">DEMO</a></h1>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="">
                                <NavLink exact to="/" activeClassName="active">Index</NavLink>
                            </li>
                            <li className="">
                                <NavLink exact to="/" activeClassName="active">Summary</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container clearfix">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;
