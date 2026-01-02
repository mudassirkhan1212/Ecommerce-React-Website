import "./nav.css";
function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="row nav-row d-flex ">
          <div className="col-md-2"></div>
          <div className="col-md-2 ">
            <div className="">
              <a href="" className="borderr side">
                books
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <a href="" className="side">author</a>
            </div>
          </div>

          <div className="col-md-2">
            <div>
              <a href="" className="side">discover</a>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <a href="">connect</a>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
