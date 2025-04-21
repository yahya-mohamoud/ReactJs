import React from 'react'
import './header.css'

function Header() {
  return (
    <header>
        <section className='hero'>
            <div className="background">
        <nav className='navbar'>
            <h1><a href="">SIRAD</a></h1>
            <div className="navList">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Contact US</a></li>
                    <li><a href="">About Us</a></li>
                </ul>
            </div>
        </nav>
        <div className="info">
            <h2>SIRAD Institute for Research and Development</h2>
           
            <p>SIRAD unites communities to create sustainable, evidence-based solutions for peace, human rights, and social cohesion.</p>
        </div>
            </div>
        </section>
    </header>
    
  )
}

export default Header