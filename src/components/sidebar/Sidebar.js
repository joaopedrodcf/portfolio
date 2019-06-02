import React from 'react';

import Book from 'react-feather/dist/icons/book';
import { Container, SCSidebar, SCNavLink, Sections } from './style';

const Sidebar = () => {
    return (
        <SCSidebar>
            <Container>
                <Sections showMargin>
                    <SCNavLink to="/" exact>
                        <Book /> About Me
                    </SCNavLink>
                </Sections>
            </Container>
        </SCSidebar>
    );
};

export default Sidebar;
