import './style.css'
import heroImage from './heroImage.webp'
import heroImageMobile from './heroImageMobile.webp'

function Hero() {
  return (
    <div className="splitBackground">
      <div className="container">
        <div className="sectionSpacing">
          <div className="hero">
            <div>
              <h1>
                A Film Production & Distribution Company
              </h1>
            </div>
            <div>
              <picture>
                <source srcSet={heroImage} media="(min-width: 990px)" alt="Still from Road to Yesterday" />
                <img srcSet={heroImageMobile} alt="Still from Road to Yesterday" className="heroImageMobile" />
              </picture>;
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Hero;
