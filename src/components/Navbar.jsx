import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.scss"
// import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "../containers/greeting/migration";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(({ prevPos, currPos }) => {
    const isScrolledDown = currPos.y < -700; // Replace 100 with the scroll position you want
    setIsTop(!isScrolledDown);
  });


  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {/* {`<${mainBody.firstName} />`} */}
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {
            <NavLink className="nav-item lead">
              {/* <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link> */}
            </NavLink>
          }
          {(
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              About
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={"https://drive.google.com/file/d/1dXiHNOcpqHctohfVXaZI2Bo2e8N9JrHi/view?usp=sharing"}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
          {(
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#experience"}
            >
              Experiences
            </NavLink>
          )}
          {(

            <NavLink
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </NavLink>
          )}
           {(
          <NavLink
            href={process.env.PUBLIC_URL + "/#contact"}
          >
            Contact
          </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
