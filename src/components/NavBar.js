import React from 'react'
import {Link} from 'react-router-dom'
import { MoonStars } from 'react-bootstrap-icons/dist';
import '../css/newsItem.css' ;

const NavBar = (props) => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>TrendTracker</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                        <ul className="navbar-nav me-3 mb-2 mb-lg-0"   >
                            <li className='nav-item me-3'><Link className="nav-link" to="/bookmark">Bookmark</Link></li>
                            <li className="nav-item mt-lg-1 " ><MoonStars color="white" size={22} onClick={ ()=> { props.setTheme(!props.theme) }}/></li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
    )

}

export default NavBar
