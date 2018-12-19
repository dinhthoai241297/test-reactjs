import React, { Component } from 'react';
import logo from '../../assets/img/logo.jpg';
import newjob from '../../assets/img/newjob.jpg';
import NavBottom from '../common/NavBottom';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="c-home-parent">
                <div className="c-home-main">
                    <div>
                        <div className="mb-2">
                            <img src={logo} width="100%" alt="img" />
                        </div>
                        <div className="container mb-2">
                            <div className="row">
                                <div className="col-12">
                                    <form>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Search avaiable contracts" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <img src={newjob} width="100%" alt="img" />
                        </div>
                        <div className="container">
                            <div className="mb-2">
                                Create your own referral contract
                        </div>
                            <div className="pb-2">
                                <Link to='/create' className="btn btn-primary">
                                    Create your own contract
                                </Link>
                            </div>
                        </div>
                        <div id="test">

                        </div>
                    </div>
                </div>
                <NavBottom />
            </div>
        );
    }
}

export default Home;
