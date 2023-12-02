import React from 'react'
import "./About.css"

function About() {
  const infoStyle = {
    color: "rgb(180, 197, 27)",
    fontSize: "15px",
    fontWeight: "800",
  }

  return (
    <div className='about'>
      <h1>ABOUT ME</h1>
      <p>I am a passionate developer with dual role, currently pursuing a degree in electronics and computer engineering at Lagos State University. Balancing academia and hands-on development, I bring a unique blend of theoretical knowledge and practical expertise to the table. As a dedicated student, I am immersed in the dynamic world of computer engineering, exploring the intricacies of hardware, software, and the convergence of technology.</p>
      <section className='bios'>
        <span style={infoStyle}>Name :</span><span>&#160; &#160;  &#160; &#160; Mathew Solomon Segbetin</span> <br />
        <span  style={infoStyle}>Location :</span><span>&#160; &#160;Lagos, Nigeria</span> <br />
        <span  style={infoStyle}>Email :</span><span>&#160; &#160; &#160; &#160; devsolary@gmail.com</span><br />
        <span  style={infoStyle}>Phone no. :</span><span>+234 8152145092</span><br />
        <span  style={infoStyle}>Language :</span><span>&#160; English</span>
      </section>
    </div>
  )
}

export default About