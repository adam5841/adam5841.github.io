import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";


import { Container } from "react-bootstrap";
import Typist from 'react-typist';
import { Jumbotron } from "./migration.jsx";
import Button from "../../components/button/Button";
import StyleContext from "../../contexts/StyleContext";
import {illustration, greeting} from "../../portfolio";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Jumbotron
      fluid
      id="home"
      style={{
        background: `linear-gradient(136deg,${greeting.gradient})`,
        backgroundSize: "1200% 1200%",
      }}
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div id="stars"></div>
      <Container className="text-center">
        <h1 ref={greeting.ref} className="display-1">
          {greeting.title}
        </h1>
        <Typist>
          <div className="lead typist">
            {greeting.message}
          </div>
        </Typist>
        <div className="p-5">
          {greeting.icons.map((icon, index) => (
            <a
              key={`social-icon-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.url}
              aria-label={`My ${icon.image.split("-")[1]}`}
            >
              <i className={`fab ${icon.image}  fa-3x socialicons`} />
            </a>
          ))}
        </div>
        <a
          className="btn btn-outline-light btn-lg "
          href="#aboutme"
          role="button"
          aria-label="Learn more about me"
        >
          More about me
        </a>
      </Container>
    </Jumbotron>
  );
}