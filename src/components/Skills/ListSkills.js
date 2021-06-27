import React from "react"
// import SkillsBar from "react-skills-bars"
import "./ListSkills.scss"
import loadable from "@loadable/component"

const SkillsBar = loadable(() => import("react-skills-bars"))

export default function ListSkills(props) {
  const { skills, colors } = props
  return (
    <div className="list-skills">
      <SkillsBar
        skills={skills}
        colors={colors}
        animationDelay={0}
        animationDuration={1000}
      />
    </div>
  )
}
