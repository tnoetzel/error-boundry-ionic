import React from 'react';

const Layout: React.FC<any> = (props) => {
    return (
        <section className="Layout">
            <nav>
                [NAV]
            </nav>

            <main>{props.children}</main>
        </section>
    );
}

export default Layout;