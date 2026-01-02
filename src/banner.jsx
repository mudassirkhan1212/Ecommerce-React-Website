import "./banner.css";
import book from "./assets/img/9781526657077_boxset-450-px.png";
function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row banner-row">
          <div className="col-md-6 ">
            <div className="banner-card">
              <div className="banner-card-2">
                <h2 className="banner-card-h2">A Court of Thorns and Roses</h2>
                <p>
                  Paperback Box Set - from the #1 global bestselling phenomenon
                  Sarah J. Maas
                </p>
                <div class="author-title-content" bis_skin_checked="1">
                  <a
                    className="hero-link-marker"
                    href=""
                    aria-label="Sarah J. Maas"
                  >
                    Sarah J. Maas
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="" className="banner-btn">
                    shop now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="banner-img">
              <img src={book} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
