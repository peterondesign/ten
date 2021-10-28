import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Container, Row, Button, Modal} from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Images
import tenlogo from './tenlogo.svg';
import heroLionheart from './heroLionheart.webp';
import heroRTY from './heroRTY.webp';
import playButton from './playButton.svg';
import iconClose from './iconClose.svg';


export default function App() {

  return (
    <Router>
      <div>
        <Container>
          <Row>
            <nav className="header">
              <div>
                <img src={tenlogo} alt="Logo for The Entertainment Network" /></div>
              <div className="menuItems" id="menulinks">
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);


  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
}

  const setModal2IsOpenToTrue =()=>{
    setModal2IsOpen(true)
  }

  const setModal2IsOpenToFalse =()=>{
  setModal2IsOpen(false)
  }

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
                <>
                <Button onClick={setModalIsOpenToTrue}>
                  <img onClick={setModalIsOpenToTrue} src={playButton} alt="Click to Play"></img>
                </Button>
                  <Modal isOpen={modalIsOpen}>
                    <Button onClick={setModalIsOpenToFalse} className="btn-secondary">
                    <img onClick={setModalIsOpenToFalse} src={iconClose} alt="Click to Close"></img>
                    </Button>
                    <h1>Lionheart (2018)</h1>
                    <iframe className="youtubeFrame" width="711" height="400" src="https://www.youtube.com/embed/UPnlPgzV3tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>
                    Running a company can be challenging, especially for a female in a male-dominated industry. Looking to prove her worth, Adaeze steps up to the challenge when health issues force her father to take a step back.
                      <br></br><br></br>
                      Director: Genevieve Nnaji
                      <br></br>
                      Writers: Genevieve Nnaji, Ishaya Bako, Emil Garuba
                      <br></br>
                      Stars: Genevieve Nnaji, Nkem Owoh, Pete Edochie
                      </p>
                  </Modal>
                </>
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
                <>
                <Button onClick={setModal2IsOpenToTrue}>
                    <img onClick={setModal2IsOpenToTrue} src={playButton} alt="Click to Play"></img>
                </Button>

                  <Modal isOpen={modal2IsOpen}>
                    <Button onClick={setModal2IsOpenToFalse} className="btn-secondary">
                      <img onClick={setModal2IsOpenToFalse} src={iconClose} alt="Click to Close"></img>
                    </Button>
                      <h1>Road to Yesterday (2015)</h1>
                      <iframe className="youtubeFrame" width="711" height="400" src="https://www.youtube.com/embed/dop5Ujm7H8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <p>
                      An estranged couple try to fix their marriage on a road trip to a relative's funeral. However when memories and secrets from the past are revealed, a lot more is at stake than their relationship.
                      <br></br><br></br>
                      Director: Ishaya Bako
                      <br></br>
                      Writers: Genevieve Nnaji, Ishaya Bako, Emil Garuba
                      <br></br>
                      Stars: Genevieve Nnaji, Oris Erhuero, Chioma Omeruah
                      </p>
                  </Modal>
                </>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </Carousel>
      <Container>
        <Row className="footer">
          <div className="footerLink"><a href="https://www.instagram.com/lionheartthemovie/" target="_blank" rel="noreferrer">Instagram</a></div>
          <div className="footerLink"><a href="mailto:info@tenafrica.tv" target="_blank" rel="noreferrer">Send a Mail</a></div>
          <div className="footerLink"><a href="https://www.linkedin.com/company/ten-africa/" target="_blank" rel="noreferrer">Linkedin</a></div>
          <div className="footerLink"><a href="https://www.youtube.com/channel/UCzkpf5Cln30JxBFZge1996Q" target="_blank" rel="noreferrer">Youtube</a>
          </div>
        </Row>
      </Container>
    </div>);
}

function About() {
  return (
    <div>
      <Container>
        <Row>
          <h2 className="headerSpacing">About</h2>
          <p>
            The Entertainment Network is a film/tv production and distribution company founded in 2015 by Chinny Onwugbenu and Genevieve Nnaji. It was set out to tell artisit-driven, authentic African stories. Notable projects include: the Africa Magic Viewers Choice award-winning drama Road to Yesterday, and Netflix's first original Nigeria Film and the national submission for the 92nd Academy Awards.<br></br><br></br>
            The Entertainment Network plans to establish a Television arm, developing high end drama series with international partners and a diverse range of top level talent.
          </p>
        </Row>
      </Container>
    </div>
  );
}

function News() {
  // document.getElementById("menulinks").style.display = "none";
  // setTimeout(function(){
  //   document.getElementById("menulinks").style.display = "block";
  // }, 2000);
  const PublicGoogleSheetsParser = require('public-google-sheets-parser');
  const spreadsheetId = '122sjCTIExZPXPP42dEbdxSOKFux0nWctN0ZMO-xUDoU';
  new PublicGoogleSheetsParser(spreadsheetId).parse()
  .then((articles)=>{
    let article = "";
    articles.forEach(myFunction);
    function myFunction(value) {
      article += '<div class="col-md-6 customPadding"><div class="news"> <a href="'+value.newsLink+'" target="_blank" rel="noreferrer"><div class="newsImage" style="background-image: url('+value.newsImage+ ')" ></div> </a><a href="'+value.newsLink+'" target="_blank" rel="noreferrer">'+value.newsTitle+'</a> </div> </div>'
      }
      document.getElementById("articlelist").innerHTML = article;
  }
  );

  return (
    <div>
      <Container>
        <Row>
          <h2 className="headerSpacing">News</h2>
        </Row>
        </Container>
      <Container>
        <div className="row" id="articlelist">
        </div>
      </Container>
    </div>
  );
}

function Contact() {
  return (
    <Container>
      <Row>
        <h2 className="headerSpacing">Contact</h2>
      </Row>
      <Row className="contactRow">
        <a href="mailto:info@tenafrica.tv" target="_blank" rel="noreferrer" ><p>info@tenafrica.tv</p></a><br></br>
        <a href="https://www.instagram.com/lionheartthemovie/" target="_blank" rel="noreferrer" ><p>Instagram.com/lionheartthemovie/</p></a>
      </Row>
    </Container>)
    ;
}