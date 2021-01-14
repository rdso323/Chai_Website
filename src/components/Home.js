import React from "react";
import "./Home.css";
import chaiPic from "../images/masala-chai-1.jpg";
import chaiPic2 from "../images/masala-chai-2.jpg";
import chaiPic3 from "../images/Quentin_chai_1.jpeg";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="Main">
      <div className="App">
        <NavBar />
      </div>
      <div className="App-header">
        <div className="left">
          <h1 className="welcome">Welcome To Chai</h1>
          <p className="welcome-body" style={{ fontSize: "17px" }}>
            Originating in India, Chai is one of the most sought after and
            cherished beverage around the world. Made with a blend of spices,
            it's aromatic scent is familar to those who've brewed a cup before.
            Proven to reduce blood suagr levels and improve overall wellbeing of
            the consumer, we here at "Chai" believe it's imperative that
            everyone has a chance to indulge in a glass.{" "}
          </p>
          <h6 className="welcome-footer" style={{ fontSize: "14px" }}>
            Copyright &copy; 2020 Rohan &reg;
          </h6>
        </div>
        <div className="right">
          <img className="first" src={chaiPic} alt="pic" />
          <img className="second" src={chaiPic2} alt="pic" />
          <img className="third" src={chaiPic3} alt="pic" />
          <h3 className="quote">
            “Rainy days should be spent at home with a cup of tea and a good
            book.”
          </h3>
          <h4 className="quote-author">- Bill Watterson</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
