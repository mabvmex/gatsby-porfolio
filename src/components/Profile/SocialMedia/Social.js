import React from "react"
import Twitter from "../../../images/svg/twitter.svg"
import Facebook from "../../../images/svg/facebook.svg"
import Instagram from "../../../images/svg/instagram.svg"
import Linkedin from "../../../images/svg/linkedin.svg"
import Github from "../../../images/svg/github.svg"
import "./Social.scss"

const redesSociales = [
  {
    icon: <Twitter />,
    link: "https://twitter.com/mabvmex ",
    target: "target='_blank' rel='noreferer noopener'",
  },
  {
    icon: <Facebook />,
    link: "https://facebook.com/mabvmex",
    target: "target='_blank' rel='noreferer noopener'",
  },
  {
    icon: <Instagram />,
    link: "https://instagram.com/mabvmex ",
    target: "target='_blank' rel='noreferer noopener'",
  },
  {
    icon: <Linkedin href="" />,
    link: "https://linkedin.com/in/mabvmex ",
    target: "target='_blank' rel='noreferer noopener'",
  },
  {
    icon: <Github href="" />,
    link: "https://github.com/mabvmex ",
    target: "target='_blank' rel='noreferer noopener'",
  },
]

export default function Social() {
  return (
    <div className="social">
      {redesSociales.map((item, index) => (
        <a key={index} href={item.link} target={item.target}>
          {item.icon}
        </a>
      ))}
    </div>
  )
}
