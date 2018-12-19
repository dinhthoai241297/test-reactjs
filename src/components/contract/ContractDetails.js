import React, { Component } from 'react';
import NavBottom from '../common/NavBottom';
import { Link } from 'react-router-dom';

class ContractDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="c-ctdetails-parent">
                <div className="c-ctdetails-main">
                    <div className="c-header">
                        Contract Details
                    </div>
                    <div className="container mt-4">
                        {/* <div className="mb-4">
                            <span className="c-underline">Roman</span> will offer $ <span className="c-underline">ATM</span> to <span className="c-underline">REFER PARTY</span>
                            for suiable candidate for <span className="c-underline">JOBID</span>
                            . This offer ends <span className="c-underline">EXPIRY DATE</span>
                        </div>
                        <div className="c-button-group">
                            <button type="button" className="btn btn-outline-secondary">Accept</button>
                            <button type="button" className="btn btn-outline-secondary">Counter offer</button>
                            <button type="button" className="btn btn-outline-secondary">Reject</button>
                        </div> */}
                        <div className="c-bg-white">
                            <div className="p-3 c-brb">
                                <span className="c-underline">Roman</span> will
                                offer $ <span className="c-underline">ATM</span> to <span className="c-underline">REFER PARTY</span> for
                                suiable candidate for <span className="c-underline">JOBID</span>
                                . This offer ends <span className="c-underline">EXPIRY DATE</span>
                            </div>
                            <div className="c-details-box">
                                <Link to='/' className="c-brr">
                                    Accept
                                </Link>
                                <Link to='/' className="c-brr">
                                    Counter offer
                                </Link>
                                <Link to='/'>
                                    Reject
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

export default ContractDetails;
