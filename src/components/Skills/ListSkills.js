import React from "react"
import SkillsBar from "react-skills-bars"
import "./ListSkills.scss"

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
