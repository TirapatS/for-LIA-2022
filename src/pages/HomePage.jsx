import Container from 'react-bootstrap/Container'

/* Bilder */
import heroImg from '../assets/images/hero_fp_carswipe.jpg'
import safeIcon from '../assets/images/carswipe-safe-icon.png'
import searchIcon from '../assets/images/carswipe-sok-icon.png'
import moneyIcon from '../assets/images/money.png'
import financeIcon from '../assets/images/finance.png'
import bankidIcon from '../assets/images/bankid.png'
import adIcon from '../assets/images/ad.png'
import insuranceIcon from '../assets/images/insurance_warranty.png'
import autoConcept from '../assets/images/carswipe-partner-autoconcept.png'
import ryds from '../assets/images/carswipe-ryds.jpg'
import opus from '../assets/images/carswipe-partner-opus.png'
import tryggHansa from '../assets/images/carswipe-trygg-hansa.png'
import zakra from '../assets/images/carswipe-partner-zakra.png'
import lanSparbank from '../assets/images/carswipe-partner-lan-och-spar.jpg'
import bringW from '../assets/images/carswipe-partner-bringw.png'
import carInfo from '../assets/images/carswipe-partner-carinfo.jpg'
import ntp from '../assets/images/carswipe-partner-ntp.jpg'
import openPayments from '../assets/images/carswipe-partner-openpayments.jpg'
import pingPayments from '../assets/images/carswipe-partner-ping-payments.jpg'
import envelopeIcon from '../assets/images/envelope.png'
import chatIcon from '../assets/images/chat.png'
import faqIcon from '../assets/images/faq.png'
import callIcon from '../assets/images/call.png'
import symbol from '../assets/images/carswipe-symbol-2020.png'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import '../assets/css/HomePage.css'
import '../assets/css/Nav.css'

function HomePage() {
  return (
    <>
      <section className="heroContainer d-flex justify-content-center">
          <div className="heroTextContainer">
            <div className="heroText">
              <h4>Med Carswipe säljer du en bil på ett tryggare och enklare sätt</h4>
            </div>
            <div className="heroButtons">
              <div className="d-flex justify-content-around ">
                <p className="annons">+ Skapa annons</p>
                <p className="buttonBlue">Så funkar det</p>
              </div>
            </div>
          </div>  
        
          <img src={heroImg} style={{width: '100%', height: '500px'}}/>
      </section>

      <section>
        <div className="sellingPointContainer">
          <div className="container">
            <Row lg={4} xs={1} className="d-flex justify-content-center">
            <Col className="sellingPointCard">
                <div className="sellingPoint ">
                  <img src={safeIcon} />
                  <div className="mx-2">
                    <p>Carswipe är en säker plattform som jobbar med att etablerade partners.</p>
                  </div>
                </div>
              </Col>
            <Col className="sellingPointCard">
                <div className="sellingPoint">
                  <img src={searchIcon}/>
                  <div className="mx-2">
                    <p>På Carswipe hittar du enkelt och snabbt det du letar efter.</p>
                    <p className="link">Köp bil</p></div>
                  </div>   
            </Col>
            <Col className="sellingPointCard">
                <div className="sellingPoint">
                  <img src={moneyIcon}/> 
                  {/* Det saknades en ikon så jag improviserade och lade en som kunde vara lik :) */}
                  <div className="mx-2">
                    <p>Lägg till snabbt & tryggt ett bud på den bil du vill köpa</p>
                    <p className="link">Sälj bil</p>
                  </div>
                </div>
            </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="myContainer videoAndList">
          <div className="videoContainer">
            <div className="videoTitle">
              <h6>Gör bilaffärer med Carswipe</h6>
              <h3>Tryggare och säkrare med Carswipe</h3>
            </div>
            <div className="videoPlayer">
              <iframe
                src={`https://www.youtube.com/embed/JT9X3-flqz4`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
          </div>
        
          <div className="sellingPointsList">
            <div className="listItems">
              <img src={financeIcon}/>
              <div>
                <h6>Billån med säkerhet</h6>
                <p>Billån med låg ränta (3,49%) </p>
              </div>
            </div>
            <div className="listItems">
              <img src={bankidIcon}/>
              <div>
                <h6>Köp och sälj med BankID</h6>
                <p>En säkerhet för både köpare & säljare</p>
              </div>
            </div>
            <div className="listItems">
              <img src={adIcon}/>
              <div>
                <h6>Kostnadsfri armotering</h6>
                <p>Skapa en annons på Carswipe och betala endast vid slutförd affär</p>
              </div>  
            </div>
            <div className="listItems">
              <img src={moneyIcon}/>
              <div>
                <h6>Säkerbetalning & ägarbyte</h6>
                <p>Vi ser till att du får betalt och hjälper till med ägarbytet</p>
              </div>  
            </div>
            <div className="listItems">
              <img src={insuranceIcon}/>
              <div>
                <h6>Försäkring och garanti</h6>
                <p>Var trygg om något händer</p>
              </div>  
            </div>
            <div className="listAnnons">
              <p className="annons">+ Skapa annons</p>
            </div>
          </div>
      </section>

      <section className="myContainer">
        <div className="partners">
          <h6>Noga utvalda partners</h6>
          <h3>En trygg bilaffär</h3>
        </div>
        <div className="partnersImages">
          <Row lg={6} xs={3} className="partnersImagesRow mt-3">
            <Col className="partnerImageCard"><img src={opus}/></Col>
            <Col className="partnerImageCard"><img src={autoConcept} /></Col>
            <Col className="partnerImageCard"><img src={ryds} /></Col>
            <Col className="partnerImageCard"><img src={tryggHansa} /></Col>
            <Col className="partnerImageCard"><img src={zakra} /></Col>
            <Col className="partnerImageCard"><img src={lanSparbank} /></Col>
          </Row>
          <Row lg={6} xs={2} className="partnersImagesRow mt-3">
            <Col className="partnerImageCard"><img src={bringW} /></Col>
            <Col className="partnerImageCard"><img src={openPayments} /></Col>
            <Col className="partnerImageCard"><img src={pingPayments} /></Col>
            <Col className="partnerImageCard"><img src={carInfo} /></Col>
            <Col className="partnerImageCard"><img src={ntp} /></Col>
            <Col className="partnerImageCard"></Col>{/* Saknar Smart365 bild */}
          </Row>
        </div>
      </section>

      <section className="myContainer">
        <div className="reviews">
          <div className="reviewsUpper">
            <h3>Bilaffärer utan omvägar</h3>
            <div className="sellCarButton">
              <h6 className="buttonBlueOutline">Sälj din bil</h6>
            </div>
          </div>
          <div>
            <div className="reviewCard">
                <div className="reviewImage">
                </div>
                <div className="reviewText">
                  <h6>"Häftigt med ett nytt sät att sälja bilen på. Jag har sålt en del bilar genom åren och är ganska trött på att bli nerringd av främmande personer. Detta kommer jag fortsätt använda!"</h6>
                  <h6>- Basse</h6>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="helpContainer">
        <div className="myContainer">
            <div className="helpTitle">
              <h6>Vi finns här för dig</h6>
              <h4>Hur kan vi hjälpa dig</h4>
            </div>
            <div className="help">
              <Row lg={4} xs={1} className="helpRow">
                <Col>
                  <img src={faqIcon} style={{ height: 48}}/>
                  <h6>Snabba Svar</h6>
                  <p className="link">Läs vår FAQ</p>
                </Col>
                <Col>
                  <img src={callIcon}/>
                  <h6>Ring oss</h6>
                  <p className="link">070-000-00-00</p>
                </Col>
                <Col>
                  <img src={chatIcon}/>
                  <h6>Prata med oss</h6>
                  <p className="link">Öppna chatt</p>
                </Col>
                <Col>
                  <img src={envelopeIcon}/>
                  <h6>Mejla Oss</h6>
                  <p className="link">kontakt@carswipe.se</p>
                </Col>
              </Row>
            </div>
        </div>
      </section>

      <section className="contactContainer">
        <div className="myContainer contactTextContainer ">
          <div className="contactUpper">
            <img src={symbol} style={{width:40}} />
            <h6>Join the car-volution!</h6>
          </div>
          <div className="whiteLine"></div>
          <div className="contacts">
            <div>
              <h6 className="whiteFont">Carswipe</h6>
              <p className="link">Skapa profil</p>
              <p className="link">Köp bil</p>
              <p className="link">Sälj bil</p>
            </div>
            <div>
              <h6 className="whiteFont">Kontakt & hjälp</h6>
              <p className="link">Så funkar det</p>
              <p className="link">Pris</p>
              <p className="link">Kontakt</p>
            </div>
            <div>
              <h6 className="whiteFont">För företag</h6>
              <p className="link">Bli företagskund</p>
              <p className="link">Handlarlogin</p>
            </div>
            <div>
              <h6 className="whiteFont">Information</h6>
              <p>Carswipe AB</p>
              <p>559167-0210</p>
              <p>Företaget innehar F-skattsedel.</p>
              <p className="link">info@carswipe.se</p>
            </div>
          </div>
          <div className="greyLine"></div>
        </div>
      </section>
    </>
    
  )
}

export default HomePage