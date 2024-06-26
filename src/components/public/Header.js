import React from 'react';
import { Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <nav>
                    <ul>
                        
                        <li><Link to="/qui"> Qui est-ce</Link></li>
                        <li><Link to="/competences">Mes compétences</Link></li>
                        <li><Link to="/auth/login">Connexion</Link></li>
                        
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;