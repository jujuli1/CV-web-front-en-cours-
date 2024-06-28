import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='sidemenu'>
            HEYYYYYYYYYYY!!!
            <ul>

                <li><Link to='/'>Acceuil</Link></li>
                <li><Link to='/admin/dashboard'>Dashboard</Link></li>
                <li>
                    User
                    <ul>
                    <li><Link to='/admin/user/index'>Qui suis-je</Link></li>
                    <li><Link to='/admin/user/add'>Compétences</Link></li>
                    </ul>
                </li>
                
            </ul>
        </div>
    );
};

export default SideMenu;