import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="main">
            {/* External Control / UI
            <Col sm={12} md={3} id="sidebarL">
              <h2 className="title">Gisida Portal</h2>
              <nav id="sidebarL" />
            </Col>
            */}

            {/* Map Wrapper / View */}
            <Col sm={12} md={12} id="mapWrap">
              <main>
                <h2>Load Map</h2>
                <div id="map-1"></div>
              </main>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
