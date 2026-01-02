import "./index.css";
import Book from "./book";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookdetail from "./bookdetail";
import book from "./assets/img/9781635570304.jpg";
import Header from "./header";
import Footer from "./footer";
import Banner from "./banner.jsx";
import Navbar from "../navbar.jsx";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Book />
                <Book />
                <Book />
                <Book />
              </>
            }
          />
          <Route
            path="/bookdetail/:id"
            element={
              <Bookdetail
                title="The Priory of the Orange Tree"
                author="Samantha Shannon (Author)"
                firstprice="$18.00"
                disprice="20.00"
                saving="Website price saving $2.00 (10%)"
                book={book}
              />
            }
          />
          <Route
            path="/bookoutlawed/:id"
            element={
              <Bookdetail
                title="The Priory of the Orange Tree"
                author="Samantha Shannon (Author)"
                firstprice="$18.00"
                disprice="20.00"
                saving="Website price saving $2.00 (10%)"
                book={book}
              />
            }
          />
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
