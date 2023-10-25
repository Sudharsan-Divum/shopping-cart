import React from "react";
import "./index.scss";
import shopBg from "../../images/shop-bg.jpg";
import storeItems from "../../data/items.json";
import Footer from "../../components/footer";
import { StoreItems } from "../../components/storeItmes";
import { Card, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container" style={{ position: "relative" }}>
          <img
            src={shopBg}
            style={{ objectFit: "cover", width: "100%" }}
            alt="Shop Background"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "55%",
              transform: "translate(-50%, -50%)",
              background: "rgba(0, 0, 0, 0.7)",
              color: "#fff",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <span className="h6">
              Step into a world of endless possibilities where style meets
              affordability. Explore our curated collection of top-notch
              products, handpicked just for you. Unveil the latest trends,
              discover timeless classics, and make every purchase a delightful
              experience. With unbeatable prices, secure transactions, and swift
              deliveries, your shopping journey begins here. Elevate your
              lifestyle at <em><b>ShopyFy</b></em>.
            </span>
          </div>
        </div>
        <div className="container m-2">
          <Link to={"/store"}>
            <Carousel
              className="carousel slide mb-3"
              data-ride="carousel"
              id="carouselExampleSlidesOnly"
            >
              {storeItems.slice(0, 5).map((item, index) => (
                <Carousel.Item key={index} className="p-3">
                  <StoreItems {...item} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Link>
        </div>
      </div>

      <div className="home-foot">
        {/* <Footer /> */}
        Footer
      </div>
    </>
  );
};

export default Home;
