import "./author.css";
import Book from "./book";
import book from "./assets/img/22705.jpg";
function Author() {
  <></>;
  return (
    <>
      <section className="color-bg">
        <div className="container">
          <div className="heading3">
            <h2>About the contributors</h2>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="author-section">
                <div className="author-flex">
                  <div className="author-align">
                    <div className="author-div">
                      <img src={book} alt="" className="author-img" />
                    </div>
                  </div>
                  <div className="about-the-author__content--bio">
                    <p className="heading-level-5">Author</p>
                    <p className="heading-level-3">
                      <a href="" title="Sarah J. Maas">
                        Sarah J. Maas
                      </a>
                    </p>
                    <p className="author-para">
                      Sarah J. Maas is the #1 bestselling author of the…{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
      <section>
        <Book />
      </section>
    </>
  );
}

export default Author;
