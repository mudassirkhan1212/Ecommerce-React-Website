import "./bookdetail.css";

function Bookdetailprice(bookprice) {
  return (
    
      <a href="" className="box">
        <span>{bookprice.format}</span>
        <span>{bookprice.price}</span>
      </a>

  );
}

export default Bookdetailprice;
