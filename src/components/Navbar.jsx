import logo from '../assets/images/logo.png';

const Navbar = () => {
    
    return (
        <nav className="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation" style={{ height: '30px' }}>
            <div className="navbar-menu is-size-5" style={{ display: "flex", justifyContent: "center" }}>
            <div className="navbar-item">
            <a href="/landing_page/#Home">Home</a>
            </div>
            <div className="navbar-item">
            <a href="/landing_page/#Story">Project story</a>
            </div>
            <div className="navbar-item">
            <a href="/landing_page" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="logo" style={{ width: 'auto', height: 'auto' }}/>
            </a>
            </div>
            <div className="navbar-item">
            <a href="/landing_page/#Features">Some features</a>
            </div>
            <div className="navbar-item">
            <a href="/landing_page/#About">About</a>
            </div>
            </div>
        </nav>   
    );
};

export default Navbar;