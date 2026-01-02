import book from "./assets/img/9781635570304.jpg";
import "./bookdetail.css";
import Bookdetailprice from "./bookdetailprice.jsx";
import { useParams } from "react-router-dom";
import Author from "./author.jsx";
import Aboutbook from "./aboutbook";
function Bookdetail(bookdetail) {
  const { id } = useParams();
  return (
    <>
      <div className="bookdetail">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-4 col-xl-4">
              <div>
                <div>
                  <img src={bookdetail.book} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6   col-lg-7 col-xl-7">
              <div className="booktitle">
                <h1>{bookdetail.title}</h1>

                <div className="booktitle-p">
                  <p>
                    <a href="">{bookdetail.author}</a>
                  </p>
                </div>
              </div>
              <div className="linkbox">
                <Bookdetailprice format="Paperback" price="$20.00 $18.00" />
                <Bookdetailprice format="Paperback" price="$20.00 $18.00" />
                <Bookdetailprice format="Paperback" price="$20.00 $18.00" />
              </div>

              <div className="price-span">
                <span className="first-price">{bookdetail.firstprice}</span>
                <span className="dis-price">{bookdetail.disprice}</span>
                <span className="saving">{bookdetail.saving}</span>
              </div>
              <div className="button">
                <div className="order-btn  ">
                  <a href="">Add to basket</a>
                </div>
                <div className="order-btn2 ">
                  <a href="">Add to basket</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Aboutbook />
      <Author />
    </>
  );
}

export default Bookdetail;
