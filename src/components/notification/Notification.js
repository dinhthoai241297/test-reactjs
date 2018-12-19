import React, { Component } from 'react';
import NavBottom from '../common/NavBottom';
import image from '../../assets/img/image.png';
import { Link } from 'react-router-dom';

class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="c-notification-parent">
                <div className="c-notification-main">
                    <div className="c-header">
                        Notification
                    </div>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-12 mb-2">
                                <Link to='/contractdetails'>
                                    <div className="c-box">
                                        <div className="mr-2">
                                            <i className="fas fa-circle c-color-green"></i>
                                        </div>
                                        <div className="c-image mr-2">
                                            <img width="100%" src={image} alt="img" />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div className="c-box-sub">
                                                <div className="c-black-txt">
                                                    <b>New referral contract</b>
                                                </div>
                                                <div className="c-gray-txt">
                                                    09:41 <i className="fas fa-angle-right"></i>
                                                </div>
                                            </div>
                                            <div className="c-gray-txt">
                                                Jason has sent you a new request JOB#123
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-12 mb-2">
                                <Link to='/contractdetails'>
                                    <div className="c-box">
                                        <div className="mr-2">
                                            <i className="fas fa-circle c-color-green"></i>
                                        </div>
                                        <div className="c-image mr-2">
                                            <img width="100%" src={image} alt="img" />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div className="c-box-sub">
                                                <div className="c-black-txt">
                                                    <b>New referral contract</b>
                                                </div>
                                                <div className="c-gray-txt">
                                                    10:45 <i className="fas fa-angle-right"></i>
                                                </div>
                                            </div>
                                            <div className="c-gray-txt">
                                                Emily has sent you a new request JOB#456
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <NavBottom />
            </div>
        );
    }
}

export default Notification;
