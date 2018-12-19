import React, { Component } from 'react';
import NavBottom from '../common/NavBottom';

class UploadContract extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="c-upload-parent">
                <div className="c-upload-main">
                    <div className="c-header">
                        Title
                    </div>
                    <div className="container pt-4">
                        <div className="row mb-5">
                            <div className="col-12">
                                Copy & Paste this link http://refer.plus/a4kts to your message to the intended party
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    Video to show various options of cut and pasting the hyperlink into Linkedin, Whatsapp, Facebook etc
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NavBottom />
            </div>
        );
    }
}

export default UploadContract;
