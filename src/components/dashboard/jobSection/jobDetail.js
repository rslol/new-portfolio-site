import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './jobDetail.css';

class JobDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.openDetail = this.openDetail.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
        this.renderDetails = this.renderDetails.bind(this);
    }

    openDetail = () => {
        this.setState({ open: true });
    }

    closeDetail = () => {
        this.setState({ open: false });
    }

    renderDetails(data) {
        const details = data.map(skill => 
            <ul className="list-group">
                <li className="list-group-item">{skill}</li>
            </ul>    
        );

        return details;
    }

    render() {
        const { open } = this.state;
        const { jobTitle, jobTech, companyName, date } = this.props.info;
        return (
            <section className="card col-5 m-2"> 
                <div className="card-body text-center">
                    <h4 className="card-title">{jobTitle}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{companyName}</h6>
                    <p className="card-text">{date}</p>
                    <button type="button" className="btn btn-secondary" onClick={this.openDetail}>See Tech</button>
                    <Modal open={open} onClose={this.closeDetail} center>
                        <section className="card">
                            <div className="card-body text-center">
                                <h4 className="card-title">{jobTitle}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">{companyName}</h6>
                                { this.renderDetails(jobTech) }
                            </div>
                        </section>
                    </Modal>
                </div>
         </section>
        )
    }
}

export default JobDetail;