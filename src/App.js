import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Images
import tenlogo from './tenlogo.svg';
import heroLionheart from './heroLionheart.webp';
import heroRTY from './heroRTY.webp';


export default function App() {
  return (
    <Router>
      <div>
        <Container>
          <Row>
            <nav className="header">
              <div>
                <img src={tenlogo} alt="Logo for The Entertainment Network" /></div>
              <div className="menuItems">
                <NavLink exact to="/">Work</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </nav>
          </Row>
        </Container>
        <Switch>
          <Route exact path="/">
            <Work />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Work() {
  return (
    <div>
      <Carousel autoPlay showThumbs="false" className="heroCarousel">
        <div>
          <img src={heroLionheart} alt="Still from Lionheart" />
          <Container>
            <Row>
              <div className="workControls">
                <div className="workIdentifier">
                  <p>Movies</p>
                  <h1>Lionheart (2018)</h1>
                </div>
                <div className="playButton">
                </div>
              </div>
            </Row>
          </Container>
        </div>
        <div>
          <img src={heroRTY} alt="Still from Road to Yesterday" />
          <Container>
            <Row>
              <div className="workControls">
                <div className="workIdentifier">
                  <p>Movies</p>
                  <h1>Road to Yesterday (2015)</h1>
                </div>
                <div className="playButton">
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </Carousel>
    </div>);
}

function About() {
  return (
    <div>
      <Container>
        <Row>
          <h2 className="headerSpacing">About</h2>
          <p>
            The Entertainment Network is a production and distribution company founded in 2015 by Chinny Onwugbenu and Genevieve Nnaji. It was set out to tell artisit-driven, authentic African stories. Notable projects include: the Africa Magic Viewers Choice award-winning drama Road to Yesterday, and Netflix's first original Nigeria Film and the national submission for the 92nd Academy Awards. The Entertainment Network plans to establish a Television arm, developing high end drama series with international partners and a diverse range of top level talent.
          </p>
        </Row>
      </Container>
    </div>
  );
}

function News() {
  const PublicGoogleSheetsParser = require('public-google-sheets-parser');
  const spreadsheetId = '122sjCTIExZPXPP42dEbdxSOKFux0nWctN0ZMO-xUDoU';
  const parser = new PublicGoogleSheetsParser(spreadsheetId);
  parser.parse().then((items) => {
    items.forEach((items, key) => {
      console.log(items.newsTitle);
      <Col md={6} className="zeroPadding">
          <div className="news">
            <div className="newsImage"
            // style="background-image: url();"
            ></div>
            <p>{items.newsTitle}</p>
          </div>
        </Col>
    ;
    })
  })

  return (
    <div>
      <Container>
        <Row>
          <h2 className="headerSpacing">News</h2>
              <Col md={6} className="zeroPadding">
            <div className="news">
              <div className="newsImage"
              // style="background-image: url();"
              ></div>
              <p>Test</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Contact() {
  return <h2>Contact</h2>;
}

