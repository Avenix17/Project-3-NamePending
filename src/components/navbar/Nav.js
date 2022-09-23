const Navbar = () => {
    return (
        <nav className = 'nav'>
            <div className = 'nav-content'>
                <a className = "nav-items">
                    
                    {/* Saved Events */}
                    <a href = "#Saved Events">
                        <Link
                        activeClass = "active"
                        to = "saved events"
                        spy = {true}
                        smooth = {true}
                        offset = {50}
                        duration = {1000}
                        >
                            Saved Events
                        </Link>
                    </a>

                    {/* Search Bar */}
                    <a>
                        <Link
                        activeClass = "active"
                        to = "search bar"
                        spy = {true}
                        smooth = {true}
                        offset = {50}
                        duration = {1000}
                        >
                            Search Bar
                        </Link>
                    </a>

                    {/* Logout */}
                    <a>
                        <Link
                        activeClass = "active"
                        to = "logout"
                        spy = {true}
                        smooth = {true}
                        offset = {50}
                        duration = {1000}
                        >
                            Logout
                        </Link>
                    </a>

                </a>
            </div>

            <button onClick = {closeSideNav}><i className='fa fa-close'></i></button>
        </nav> 
    )
};

// Export
export default Navbar;