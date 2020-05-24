import React from 'react';
import c3 from 'c3';

class LineChart extends React.Component {

    constructor(props) {
      super(props);
    }
    
    renderChart(column) {
      c3.generate({
        bindto: "#" + this.props.id,
        data: {
          columns: [
            column
          ]
        },
      });
    }

    componentDidMount() {
      this.renderChart(this.props.column);
    }

    componentDidUpdate() {
      this.renderChart(this.props.column);
    }

    render() {
      return (
        <div id={this.props.id}></div>
      );
    }
}

export default LineChart;