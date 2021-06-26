import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import profileAvatar from "../../images/jpg/avatar.jpg"
import Social from "./SocialMedia"
import "./Profile.scss"

const yearToday = new Date()
const myAge = yearToday.getFullYear() - 1988

const data = [
  {
    title: "Edad:",
    info: `${myAge} años`,
  },
  {
    title: "Dirección:",
    info: "México",
  },
  {
    title: "Teléfono:",
    info: "(+52) 55 5555555",
  },
  {
    title: "e-mail::",
    info: "mabvmex@gmail.com",
  },
]

export default function Profile() {
  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileAvatar} fluid />
          </Col>

          <Col xs={12} md={8} className="info__data">
            <span> ¡Hola! </span>
            <p>Miguel Barrera</p>
            <p> FullStack web developer </p>
            <hr />

            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p> {item.title} </p>
                  <p> {item.info} </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}
