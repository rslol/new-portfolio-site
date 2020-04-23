import React, { Component } from 'react';
import Chart from './chart';

const center = {
    justifyContent: 'space-evenly'
}

class Skills extends Component {
    constructor(props) {
        super(props);

        this.renderDetails = this.renderDetails.bind(this);
    }

    renderDetails(data) {
        const skillDetail = data.map(item => 
           <Chart tech={item} key={item.id}/>
        )

        return skillDetail;
    }

    render() {
        return (
            <div className="container">
                <div className="row" style={center}>
                    { this.renderDetails(this.props.talents) }
                </div>
            </div>
        )
    }
}

export default Skills; 