import "./navbar.scss"
import {useState} from "react"

function Navbar (){
const [open, setOpen] = useState(false);
return (
    <nav> 
    <div className="left"> 
    <a href="/" className="logo">
    <img src="/logo.png" alt="" />
    <span>RealEstate</span>
    </a>

    <a href="/">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <a href="#">Services</a>
    </div>
    <div className="right"> 
    <a href="/">Login</a>
    <a href="/" className="register">Register</a>
    <div className="menu-icon">
        <img src = "/menu.png" alt="" onClick={() => setOpen((prev)=> !prev)} />
</div>

<div className={`menu ${open ? 'active' : ''}`}>
  <a href="/">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
  <a href="#">Services</a>
  <a href="#">Login</a>
  <a href="#">Register</a>
</div>
    </div>
    </nav>
);

}

export default Navbar;