import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBottom extends Component {
    render() {
        return (
            <div className="c-nav-bottom">
                <div>
                    <NavLink exact activeClassName="c-nav-bot-active" to="/">
                        <i className="fas fa-2x fa-home"></i>
                    </NavLink>
                </div>
                <div>
                    <NavLink activeClassName="c-nav-bot-active" to="/notification">
                        <i className="fas fa-2x fa-user"></i>
                    </NavLink>
                </div>
                <div>
                    <NavLink activeClassName="c-nav-bot-active" to="/about">
                        <i className="fas fa-2x fa-question-circle"></i>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default NavBottom;
