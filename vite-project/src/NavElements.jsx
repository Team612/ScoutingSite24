import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

/* This page should only be for switching between pages / for buttons */
const Nav = styled(Link)
`
margin: ${props => (props.isClassInput ? "3em 0px 3em 0px" : props.isHomeButtonPitScouting ? "3.25vh 0vw 3.25 vh 80vw" : "3.5vh 1.4vw")};
padding: ${props => (props.isClassInput ? "10px" : "0px")};
float: ${props => (props.isClassInput ? "none" : "right")};
background-color: ${props => (props.isClassInput ? "rgb(53, 163, 222)" : props.isHomeButtonPitScouting ? "#0e24a1" : "#000000")};
border-style: none;
box-sizing: ${props => (props.isClassInput ? "content-box" : props.isHomeButtonPitScouting ? "content-box" : "border-box")};
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-family: 'Josefin Sans';
font-size: ${props => (props.isClassInput ? "100%" : props.isHomeButtonPitScouting ? "200%" : "4vw")};
font-weight: 500;
height: ${props => (props.isClassInput ? "auto" : props.isHomeButtonPitScouting ? "8vh" : "5.8vh")};
list-style: none;
outline: none;
position: ${props => (props.isClassInput ? "static" : "relative")};
text-align: ${props => (props.isClassInput ? "start" : "center")};
text-decoration: none;
/* transition: color 100ms; */
vertical-align: baseline;
user-select: ${props => (props.isClassInput ? "auto" : "none")};
-webkit-user-select: ${props => (props.isClassInput ? "text" : "none")};
touch-action: ${props => (props.isClassInput ? "auto" : "manipulation")};
border: none;
border-radius: ${props => (props.isClassInput ? "10px" : props.isHomeButtonPitScouting ? "1.5vw" : "0")};
width: ${props => (props.isClassInput ? "20vh" : props.isHomeButtonPitScouting ? "8vw" : "auto")};


`;
export default Nav;