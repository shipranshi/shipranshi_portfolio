import React from 'react'
import './skills.css'
import { FaCode } from "react-icons/fa";

function Skills() {
  return (
    <section id='skills'>
      <h5>What Expertise I Have</h5>
      <h2>My Skills</h2>

      <div className="container skill__container">

        {/* FRONTEND */}
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>CSS</h4>
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Javascript</h4>
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND */}
        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Nodejs</h4>
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Firebase</h4>
              </div>
            </article>
          </div>
        </div>

        {/* CS FUNDAMENTALS */}
        <div className="skill__fundamentals">
          <h3>CS Fundamentals</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>OOPS</h4>
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Operating System</h4>
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>DBMS</h4>
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>SQL</h4>
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Computer Networks</h4>
              </div>
            </article>
          </div>
        </div>

        {/* UTILITIES */}
        <div className="skill__utilities">
          <h3>Utilities</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Git</h4>
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Github</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
