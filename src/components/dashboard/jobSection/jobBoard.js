import React, { Component } from 'react'; 
import JobDetail from './jobDetail';

const center = {
    justifyContent: 'space-evenly'
}

class JobBoard extends Component {
    constructor(props) {
        super(props);

        this.displayJobCard = this.displayJobCard.bind(this);
    }

    displayJobCard(data) {
        const jobDetail = data.map(job => 
           <JobDetail info={job} key={job.id} /> 
        );

        return jobDetail;
    }

    render() {
        return (
            <section className="container" >
                <div className="row" style={center}>
                     {this.displayJobCard(this.props.jobs) }
                </div>
            </section>
        )
    }
}

export default JobBoard;