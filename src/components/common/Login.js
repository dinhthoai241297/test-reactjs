import React, { Component } from 'react';
import logo from '../../assets/img/logo.jpg';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="c-login-parent">
                <div>
                    <img src={logo} width="100%" alt="img" />
                </div>
                <div className="c-center">
                    <Link to='/' className="c-button c-bg-fb">
                        FACEBOOK LOGIN
                    </Link>
                    <Link to='/' className="c-button c-bg-googlep">
                        GOOGLE+ LOGIN
                    </Link>
                    <Link to='/'>
                        NEW USER SIGN UP
                    </Link>
                </div>
                <div className="c-bottom c-black-txt">
                    <i className="fab fa-2x fa-facebook-square"></i>
                    <i className="fab fa-2x fa-linkedin"></i>
                    <i className="fab fa-2x fa-twitter-square"></i>
                </div>
            </div>
        );
    }
}

export default Login;
