import { Link } from "react-router-dom";

const DisplayPicture = () => {
  return (
    <>
      {/* <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
        
        </div> */}

      <div className="home">
        <div className="first-pic">
          <div className="hero-home">
            <img src="/images/bg/model-2.jpg" className="model-2" />
          </div>
          <div className="front-text">
            <h1 className="display-3 fw-bold nail-heading">Nail Press Ons</h1>
            <h3 className="fw-normal  mb-3 sub-heading-text">
              Buy beautiful elegant nail designs
            </h3>
            <div className="d-flex gap-3 justify-content-center lead fw-normal">
              <Link className="" to="/buy">
                <button type="button" className="btn go-shopping">
                  Go Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="second-pic-div">
          {/* <img src="/images/bg/summer-nails.png" className="second-img" /> */}
        </div>
      </div>
      {/* <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div> */}
      {/* </div> */}
    </>
  );
};

export default DisplayPicture;
