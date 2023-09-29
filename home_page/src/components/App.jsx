import React from "react";

function App() {
  return (
    <>
      <div className="custommenu">
        <div className="first">
          <h1>Tax Sage</h1>
        </div>
        <div className="second">
          <a>Home</a>
          <a href="xyz">About</a>
          <a href="xyz">Services</a>
        </div>
        <div className="third">
          <button type="button" className="btn btn-light">
            Sign In
          </button>
          <button type="button" className="btn btn-info">
            Sign Out
          </button>
        </div>
      </div>

      <div className="maincontainer row col-12">
        <div className="stuff col-6">
          <img
            src="./images/13.png"
            style={{ height: "50vw", right: " 0" }}
            alt=""
          />
        </div>
        <div
          className="col-6 text"
          style={{ paddingLeft: "190px", paddingTop: "140px" }}
        >
          <p style={{ fontSize: "3rem", fontWeight: "900" }}>
            Your Money ,
            <br />
            Your Future
          </p>
          <p style={{ fontSize: "2rem", fontWeight: "400" }}>
            We're here to help you,
            <br /> save more{" "}
          </p>
          <a className="btn btn-primary below" href="#" role="button">
            START SAVING
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
