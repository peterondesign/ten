import tenlogo from './tenlogo.svg';
import './style.css';


function Header() {
  return (
    <div className="darkBackground">
      <div className="container">
        <div className="sectionSpacing">
          <div className="header">
            <img src={tenlogo} alt="Logo of TEN Africa"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;
