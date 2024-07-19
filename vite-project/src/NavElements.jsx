import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

/* This page should only be for switching between pages / for buttons */
const Nav = styled(Link)
`
margin:3.5vh 1.4vw;
/* padding: 1vw; */
float:right;
background-color: #000000;
border-style: none;
box-sizing: border-box;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 4vw;
font-weight: 500;
height: 5.8vh;
list-style: none;
/* margin: 0; */
outline: none;
position: relative;
text-align: center;
text-decoration: none;
/* transition: color 100ms; */
vertical-align: baseline;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;


`;

export default Nav;