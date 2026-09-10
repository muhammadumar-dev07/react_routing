import { NavLink } from "react-router";
import "./About.css"
const About = () => {
    return (

        <div>
            <NavLink to="/" end>
                Home
            </NavLink>
            <div className="Red">About US</div><br />

        </div>
    )
}

export default About;