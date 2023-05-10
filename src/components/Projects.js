import { Container } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  return (
    <section className="project">
      <Container>
                <h2>Projects</h2>
                <div className="projectcard"> 
                <h3>Business Website</h3>
                <p> 
                 A business website with directed-force knowledge graph.
                </p>
                <img className="project-image" src={projImg1} alt= "project image"></img>
                <a href="https://github.com/yangyaaaa/websitetest" target={"_blank"}> 👉Check on github repository.</a>
                </div>
                <div className="projectcard"> 
                <h3>Myreads App</h3>
                <p> 
                This is a bookshelf app that lets you to organize books that you have read, want to read or currently reading.
                </p>
                <img className="project-image" src={projImg2} alt= "project image"></img>
                <a href="https://github.com/yangyaaaa/myreads" target={"_blank"}> 👉Check on github repository.</a>
                </div>
                <div className="projectcard"> 
                <h3>Portfolio Website</h3>
                <p> 
                My portfolio website based on React.js
                </p>
                <img className="project-image" src={projImg3} alt= "project image"></img>
                <a href="https://github.com/yangyaaaa/reactPortfolio" target={"_blank"}>👉Check on github repository.</a>
                </div>
  
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}