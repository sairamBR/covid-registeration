import { AmplifySignOut } from '@aws-amplify/ui-react';
import React from 'react';
import './navstyles.css'
import {Link} from 'react-router-dom';



function Nav(){
    const navstyle = {
    color:'white'
}
    return(
        <nav className="nav">
            <div className="logocontainer">
              <Link style={navstyle} to='/'>
                <h2>Covaccine</h2>
             </Link>
            </div>
            <div className="linkscontainer">
            <ul className="nav-links">
                    <Link style={navstyle} to='/register'>
                        <li>User Register</li>
                    </Link>                    
                    <li className="button">
                        <AmplifySignOut/>
                    </li>
            </ul>
            </div>
        </nav>
    )

}

export default Nav;