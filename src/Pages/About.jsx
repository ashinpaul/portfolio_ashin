
function About(){

return(
<div className="about-content">
                  {/* Left Side: About Me Card */}
                  <div className="about-card">
                    <h2>About Me</h2>
                    <p>
                      I'm a dedicated **Full-Stack Developer** with a strong background in **.NET, React.js, and SQL**.  
                      I love building scalable applications that enhance user experiences.  
                    </p>
                    <h3>Qualifications:</h3>
                    <ul>
                      <li>🎓 **Bachelor's Degree in [Your Field]**</li>
                      <li>💼 **[Your Company] - Software Developer**</li>
                      <li>📌 Passionate about Web & Backend Development</li>
                    </ul>
                  </div>

                  {/* Right Side: Tech Stack Cards */}
                  <div className="tech-cards">
                    <div className="tech-card"><img src={net} alt="React.js" /></div>
                    <div className="tech-card"><img src={csharp} alt=".NET" /></div>
                    <div className="tech-card"><img src={reacts} alt="SQL" /></div>
                    <div className="tech-card"><img src={vb} alt="JavaScript" /></div>
                    <div className="tech-card"><img src={htm} alt="Bootstrap" /></div>
                    <div className="tech-card"><img src={js} alt="Git" /></div>
                    <div className="tech-card"><img src={sql} alt="Git" /></div>
                  </div>
                </div>
)};
export default About;