import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { connector, modules } from '../application-context';
import GlobalNavbar from '../components/global-navbar';

const { welcome } = modules;

@connector({
  quotes: welcome.getters.quotes
})
class Dashboard extends Component {
  static displayName = 'Dashboard';

  handleClick() {
    welcome.actions.getQuotes();
  }

  render() {
    const { quotes } = this.props;

    return (
      <div>
        <GlobalNavbar/>
        <Grid fluid={true}>
          <h1>Dashboard</h1>
          <Row>
            <Col lg={4}>
              <Panel header={<h3>Quotes</h3>}>
                {
                  quotes.map((quote, index) => {
                    return (
                      <h4 key={`quote-${index}`}>{quote}</h4>
                    );
                  })
                }
              </Panel>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default Dashboard;
