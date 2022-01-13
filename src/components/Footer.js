import './Footer.css'

function Footer() {
    return (
      <> 
        <div className="footer-container" id="#Footer">
          <div className="footer-text-box">
            <div className="footer-box-1">
             <p className="footer-contact footer-under-text footer-responsive">Contact</p>
             <p className="footer-contact-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fugiat dolorem ad</p>
             <br/>
             <p className="footer-contact-text">Tel. 0123456789</p>
             <p className="footer-contact-text">Email : info@steak.com</p>
            </div>
            <div className="footer-box-1 footer-2">
             <p className="footer-contact footer-under-text footer-responsive">Our Company</p>
            <ul>
              <li>About</li>
              <li>Story</li>
              <li>Recipe</li>
              <li>Review</li>
              <li>Google Map</li>
            </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Footer;
  