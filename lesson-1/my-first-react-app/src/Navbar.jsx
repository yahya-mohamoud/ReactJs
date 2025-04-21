import './Navbar.css'

function Navbar() {
    return (
    <>
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </nav>
    </>
)
}

export default Navbar;