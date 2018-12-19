import React, { Component } from 'react';
import NavBottom from '../common/NavBottom';
import { Link } from 'react-router-dom';

class CreateContract extends Component {

    constructor(props) {
        super(props);
        this.state = {
            referral: '',
            jobID: '',
            expiry: ''
        }
    }

    componentDidMount() {
        window.$('#c-date').datepicker({
            format: "dd/mm/yyyy",
            language: "vi",
            autoclose: true,
            todayHighlight: true
        }).on('changeDate', e => {
            this.setState({ expiry: window.$('#c-date').val() });
        });
    }


    hanleInputChange = e => {
        e.preventDefault();
        let { name, value } = e.target;
        console.log(name, value);
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="c-create-parent">
                <div className="c-create-main">
                    <div className="c-header">
                        Create Referral Contract
                    </div>
                    <div className="container pt-4">
                        <div className="row mb-2">
                            <div className="col-6">
                                Referral Amount $:
                            </div>
                            <div className="col-6">
                                <input
                                    type="number" className="form-control"
                                    placeholder="USD" onChange={this.hanleInputChange}
                                    value={this.state.referral} name="referral"
                                />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6">
                                Expiry Date:
                            </div>
                            <div className="col-6">
                                <input
                                    id="c-date" type="text"
                                    className="form-control" placeholder="Enter Date"
                                    name="expiry" autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-6">
                                JOB ID:
                            </div>
                            <div className="col-6">
                                <input
                                    type="text" className="form-control"
                                    placeholder="JOB ID" onChange={this.hanleInputChange}
                                    value={this.state.jobID} name="jobID"
                                />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-12">
                                <Link to='/upload' className="btn btn-primary">
                                    Upload contract and create link
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-2">
                                Contract Details
                            </div>
                            <div className="col-12">
                                <span className="c-underline">Roman</span> will offer $ <span className="c-underline">{this.state.referral || 'ATM'}</span> to <span className="c-underline">REFER PARTY</span> for suiable candidate for <span className="c-underline">{this.state.jobID || 'JOBID'}</span>
                                . This offer ends <span className="c-underline">{this.state.expiry || 'EXPIRY DATE'}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <NavBottom />
            </div>
        );
    }
}

export default CreateContract;
