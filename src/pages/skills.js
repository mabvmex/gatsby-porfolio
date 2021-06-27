import * as React from "react"
import BasicLayout from "../layouts/BasicLayout"
import { Container } from "react-bootstrap"
import ListSkills from "../components/Skills"
import {
  frontendSkills,
  backendSkills,
  MobileSkills,
  OsSkills,
  frontendSkillsColors,
  backendSkillsColors,
  OsSkillsColors,
  MobileSkillsColors,
} from "../utils/skills"
import "./Skills.scss"

export default function Skills() {
  return (
    <div>
      <BasicLayout menuColor="#000">
        <Container className="skills">
          <div className="skills__block">
            <h2>Frontend Development</h2>
            <ListSkills skills={frontendSkills} colors={frontendSkillsColors} />
          </div>
          <div className="skills__block">
            <h2>Backend Development</h2>
            <ListSkills skills={backendSkills} colors={backendSkillsColors} />
          </div>
          <div className="skills__block">
            <h2>Mobile Development</h2>
            <ListSkills skills={MobileSkills} colors={MobileSkillsColors} />
          </div>
          <div className="skills__block">
            <h2>Operating Systems</h2>
            <ListSkills skills={OsSkills} colors={OsSkillsColors} />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </BasicLayout>
    </div>
  )
}
