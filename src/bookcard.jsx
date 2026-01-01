import "./bookcard.css";

function Bookcard(cardinfo) {
  return (

      <div className="cardd">
        <div className="card-img">
          <a href="">
            <img src={cardinfo.image} alt="" />
          </a>
        </div>
        <div className="car-text">
          <div className="product-title">
            <a href="">{cardinfo.title}</a>
          </div>
          <div className="author">
            <a href="">{cardinfo.author}</a>
          </div>
          <div className="selling">
            <span className="normal-price">{cardinfo.first}</span>
            <span className="dis-price">{cardinfo.second}</span>
          </div>
          <div className="pro-info">
            <a href="">
              <span>
                {cardinfo.type}
                <span>{cardinfo.formats}</span>
              </span>
            </a>
          </div>
        </div>
      </div>

  );
}

export default Bookcard;
