import "./author.css"
import auth1 from "./author1.jpg"
import auth2 from "./author2.jpg"
import auth3 from "./author3.jpg"
const Author = () => {
    return  <div>
      <div class="testimonial-container">
      <div class="testimonial">
        <div class="testimonial-image">
          <img src={auth1} alt="Author 1"/>
        </div>
        <div class="testimonial-text">
        
          <h3>Front-End Engineer</h3>
          <h4>Full Stack Javascript Developer</h4>
        </div>
      </div>
      <div class="testimonial">
        <div class="testimonial-image">
          <img src={auth2} alt="Author 2"/>
        </div>
        <div class="testimonial-text">
          
          <h3>Back-End Engineer</h3>
          <h4> Golang Developer</h4>
        </div>
      </div>
      <div class="testimonial">
        <div class="testimonial-image">
          <img src={auth3} alt="Author 3"/>
        </div>
        <div class="testimonial-text">
          
          <h3>DevOps Engineer</h3>
          <h4>AWS Solution Architect</h4>
        </div>
      </div>
    </div>
</div>
    
}
   

 
    

export default Author;