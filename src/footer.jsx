import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer-list">
          <div className="col-md-3">
            <div className="">
              <h4>Useful Links</h4>
              <ul>
                <li>About Us </li>
                <li> Click to Change Cookie Settings </li>
                <li> Cookie Policy Current</li>
                <li>Opportunities </li>
                <li> Environmental </li>
                <li> Policy </li>
                <li>Media Contacts </li>
                <li>Modern Slavery Statement</li>
                <li> Osprey Publishing </li>
                <li> Privacy Policy </li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <div className="">
              <h4>Customer Service</h4>
              <ul>
                <li>Customer Service</li>
                <li> Contact Us </li>
                <li>Delivery</li>
                <li>Returns & Cancellations </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
