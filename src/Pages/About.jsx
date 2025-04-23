import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../Shared/Subtitle";
import '../styles/About.css';
import worldImg from "../assets/images/world.png"
import logo1 from "../assets/images/logo1.png"
import Newsletter from "../Shared/Newsletter";
import Contact from "./Contact";

const About = () => {
  return (
    <><section className="about">
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"About Us"} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Traveling Opens The Door To Creating{" "}
                <span className="highlight">Memories</span>
              </h1>
              <p>
                Welcome to Jae Travels — your gateway to unforgettable experiences across Kenya and beyond. Whether you're dreaming of a sun-soaked beach getaway, a thrilling safari in the wild, or a cultural escape into the heart of the city, we’ve got the perfect trip for you.
                Explore top destinations, handpicked travel packages, and personalized itineraries tailored to your unique travel style. Our team of travel experts is here to guide you every step of the way — from planning to booking to exploring.
                Let your journey begin here.
              </p>
            </div>
          </Col>
          <div className="about__image d-flex align-items-center">
            <img src={logo1} height={250} width={250} alt="" />
          </div>
        </Row>
      </Container>
    </section>
    <Contact/>
    <Newsletter /></>
  );
};

export default About;
