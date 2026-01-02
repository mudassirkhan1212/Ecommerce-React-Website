import svg from "./assets/img/bloomsbury-logo.svg";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="row row-align">
          <div className="col-md-2">
            <div className="logo">
              <a href="">
                <div>
                  <img src={svg} alt="" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <div className="input-box">
              <form action="">
                <div>
                  <input
                    type="text"
                    placeholder="Enter a title or author"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-2">
            <div className="icon ">
              <div>
                <FontAwesomeIcon icon={faUser} size="lg" />
              </div>
              <div>
                {" "}
                <FontAwesomeIcon
                  icon={faBasketShopping}
                  size="lg"
                  style={{ marginLeft: 10 }}
                />
              </div>
              <div>|</div>
              <div>US</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
