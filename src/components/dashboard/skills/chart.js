import React, { Component } from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';


class Chart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { color, level, skill } = this.props.tech;
        return (
            <section className="card col-10 m-3 d-flex">
                <div className="row">
                    <div className="col-5 text-center">
                        <h2 className="d-flex justify-content-center">{skill}</h2>
                    </div>
                    <div className="col-6">
                        <ReactMinimalPieChart
                            animate={false}
                            animationDuration={500}
                            animationEasing="ease-out"
                            cx={50}
                            cy={50}
                            data={[
                            {
                                color: color,
                                value: level
                            }
                            ]}
                            label
                            labelPosition={0}
                            labelStyle={{
                            fontFamily: 'sans-serif',
                            fontSize: '25px'
                            }}
                            lengthAngle={360}
                            lineWidth={20}
                            paddingAngle={0}
                            radius={50}
                            rounded={false}
                            startAngle={0}
                            totalValue={100}
                            viewBoxSize={[
                            100,
                            100
                            ]}
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default Chart;