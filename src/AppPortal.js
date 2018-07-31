import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { initStore } from 'gisida';
import {
  App,
  Map,
  Menu,
  StyleSelector,
  Legend,
  SummaryChart,
  DetailView,
  Filter,
  TimeSeriesSlider,
  Spinner,
  TitleBar,
} from 'gisida-react';
import './App.css';

// pass in PORTAL reducers to integrate with gisida stores
const store = initStore();

// bundled with:
window.gisidaVersion = {
  'gisida': 'sign-auth-dev',
  'gisida-react': 'sign-auth-dev',
  'gisida-react-private': null,
};

class AppPortal extends Component {
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
                <Provider store={store}>
                  <App>
                    <TitleBar />
                    <Map mapId="map-1">
                      <Menu />
                      <StyleSelector />
                      <Legend />
                      <Filter />
                      <SummaryChart />
                      <TimeSeriesSlider />
                      <Spinner />
                      <DetailView />
                    </Map>
                  </App>
                </Provider>
              </main>
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

export default AppPortal;
