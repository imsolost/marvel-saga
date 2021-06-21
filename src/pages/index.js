import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
    <Link to="/dragandrop/">Drag and Drop</Link>
    <br />
    <Link to="/create/">Character Create</Link> 
    <Header headerText="Marvelous" />
    <p>Text</p>
    {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
  </div>
)