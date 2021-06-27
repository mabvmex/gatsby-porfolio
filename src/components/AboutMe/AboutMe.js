import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../assets/descargas/cv.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>
        Incididunt voluptate nulla occaecat cillum pariatur nisi qui quis ipsum
        amet. Eu ad sint culpa veniam sunt. Incididunt aliquip amet ad veniam
        occaecat cillum. Anim cillum adipisicing sit ex cupidatat id velit non
        tempor. Id amet occaecat minim labore.
      </p>
      <hr />
      <a href={CV} target="_blank" rel="noreferer noopener">
        <Button primary>Descargar CV</Button>
      </a>
    </Container>
  )
}
