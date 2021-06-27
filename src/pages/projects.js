import * as React from "react"
import BasicLayout from "../layouts/BasicLayout"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import projects from "../utils/projects"
import "./projects.scss"

export default function Projects() {
  return (
    <BasicLayout menuColor="#000">
      <Container className="projects">
        <h1>Proyectos</h1>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={4} className="project">
              <Card>
                <div
                  className="image"
                  style={{ backgroundImage: `url("${project.image}")` }}
                />
                <Card.Body>
                  <Card.Title> {project.title} </Card.Title>
                  <Card.Text> {project.description} </Card.Text>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferer noopener"
                  >
                    <Button variant="primary"> Ver proyecto</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </BasicLayout>
  )
}
