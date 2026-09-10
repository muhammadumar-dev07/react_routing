import { NavLink } from "react-router";
function App() {
  return (
    <div className="text-red-500 m-8 animate-bounce">
      This is APP .JSX
      <br />
      <NavLink to="/about" end>
        About
      </NavLink> <br />
      <NavLink to="/contact" end>
        Contact US 
      </NavLink>
    </div>
  )
}

export default App;