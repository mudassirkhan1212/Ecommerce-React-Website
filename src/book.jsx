import book from "./assets/img/9781635570304.jpg";
import book1 from "./assets/img/9781635575422.jpg";
import book2 from "./assets/img/9781608196265.jpg";
import book3 from "./assets/img/9781639734672.jpg";
import book4 from "./assets/img/9781635578591.jpg";
import book5 from "./assets/img/9781547606658.jpg";
import Bookcard from "./bookcard";

function Book() {
  return (
    <div className="mt-3 container">
      <div className="row">
        <h2 className="head-2">Binge-worthy fantasy</h2>
        <div className="car">
          <div className="col-md-2">
            <Bookcard
              title="The Priory of the Orange Tree"
              author="Samantha Shannon"
              first="$18.00"
              second="RRP $20.00"
              type="Paperback"
              formats="+2 other formats"
              image={book}
            />
          </div>
          <div className="col-md-2">
            <Bookcard
              title="Outlawed"
              author="Anna North"
              first="$23.40"
              second="RRP $26.00"
              type="Hardback"
              formats="+2 other formats"
              image={book1}
            />
          </div>
          <div className="col-md-2">
            {" "}
            <Bookcard
              title="Salvage the Bones"
              author="Jesmyn Ward"
              first="$23.40"
              second="RRP $26.00"
              type="Paperback"
              formats="+1 other formats"
              image={book2}
            />
          </div>
          <div className="col-md-2">
            {" "}
            <Bookcard
              title="The House of Doors"
              author="Tan Twan Eng"
              first="$23.40"
              second="RRP $26.00"
              type="Paperback"
              formats="+2 other formats"
              image={book3}
            />
          </div>
          <div className="col-md-2">
            {" "}
            <Bookcard
              title="The Island of Missing Trees"
              author="Elif Shafak"
              first="$23.40"
              second="RRP $26.00"
              type="Hardback"
              formats="+2 other formats"
              image={book4}
            />
          </div>
          <div className="col-md-2">
            {" "}
            <Bookcard
              title="The Island of Missing Trees"
              author="Elif Shafak"
              first="$23.40"
              second="RRP $26.00"
              type="Hardback"
              formats="+2 other formats"
              image={book5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
