import React from 'react';
import logo from './logo.svg';
import LineChart from './LineChart';
import './App.css';
import 'c3/c3.css';
import { Col, Row, Container } from 'react-bootstrap';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.getData()
    setInterval(this.getData.bind(this), 10000);
  }
  
  getData() {
    fetch('http://localhost:5000/get_last_train')
        .then(response => response.json())
        .then(data => this.setState({ data: data }));
  }

  render() {
    if (JSON.stringify(this.state.data) === JSON.stringify({})) {
      return <div />
    }
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm={6} md={6}>
              <h3>LossQ</h3>
              <LineChart column={this.state.data['LossQ']} id="LossQ" />
            </Col>
            <Col sm={6} md={6}>
              <h3>LossPi</h3>
              <LineChart column={this.state.data['LossPi']} id="LossPi" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>StdQVals</h3>
              <LineChart column={this.state.data['StdQVals']} id="StdQVals" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>StdEpRet</h3>
              <LineChart column={this.state.data['StdEpRet']} id="StdEpRet" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
