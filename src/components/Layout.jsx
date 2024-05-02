import React from 'react';
import NavBarComponent from './NavBarComponent';
import Footer from './Footer';

const Layout = ({children }) => {
    return (
        <div>
            <NavBarComponent/>
                {children}
            <Footer/>
        </div>
    );
};

export default Layout;