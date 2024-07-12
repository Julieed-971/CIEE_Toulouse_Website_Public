import NavLink from 'react-router-dom/NavLink';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    

return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" style={{ height: '30px' }}>
            <div className="navbar-menu">
            </div>
            <div className="navbar-start">
					<div className="navbar-item">
						<NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
								<img src={logo} alt="logo" style={{ width: 'auto', height: 'auto' }}/>
						</NavLink>
			    	</div>
                    </div>
        </nav>   
);
};

export default Navbar;