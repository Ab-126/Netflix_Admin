import React from "react";
import "./product.css";
import { Link, useLocation } from "react-router-dom";
// import Chart from "../../components/chart/Chart";
// import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";

const Product = () => {
  const location = useLocation();
  const movie = location.state.movie;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to={"/newproduct"}>
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        {/* <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey={"Sales"}
            title={"Sales Performance"}
          />
        </div> */}
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.imgSm} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={movie.title} />
            <label>Year</label>
            <input type="text" placeholder={movie.year} />
            <label>Genre</label>
            <input type="text" placeholder={movie.genre} />
            <label>Limit</label>
            <input type="text" placeholder={movie.limit} />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>Video</label>
            <input type="file" placeholder={movie.video} />
            {/* <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select> */}
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.imgSm} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
