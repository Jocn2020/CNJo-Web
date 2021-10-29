import { useState } from 'react'
import Toogle from '../toogle/Toogle';
import './Navbar.scss'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeNavbarMenu = () => setClick(false);

    return (
        <nav className='navbar'>
            <div className='navbar-main'>
                <div className='navbar-logo'>
                <a href='/' >CNJo</a>
                </div>
                <Toogle/>
            </div>
            
            <div className="navbar-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={ click ? 'navbar-menu active' : 'navbar-menu'}>
                <li className='navbar-item'>
                    <a href="/" className='navbar-links' onClick={closeNavbarMenu}>
                        Home
                    </a>
                </li>
                <li className='navbar-item'>
                    <a href="/projects" className='navbar-links' onClick={closeNavbarMenu}>
                        Projects
                    </a>
                </li>
                <li className='navbar-item'>
                    <a href="/achievements" className='navbar-links' onClick={closeNavbarMenu}>
                        Achievements
                    </a>
                </li>
                <li className='navbar-item'>
                    <a href="/contacts" className='navbar-links' onClick={closeNavbarMenu}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;