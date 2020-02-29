import {
    Container,
    SCSidebar,
    SCNavLink,
    Sections,
    SectionsHeader,
    SCLink
} from './style';
import React from 'react';
import Twitter from 'react-feather/dist/icons/twitter';
import Book from 'react-feather/dist/icons/book';
import Mail from 'react-feather/dist/icons/mail';

const Sidebar = () => {
    return (
        <SCSidebar>
            <Container>
                <SectionsHeader>Pages</SectionsHeader>
                <Sections>
                    <SCNavLink to="/" exact>
                        <Book /> About Me
                    </SCNavLink>
                    <SCNavLink to="/projects" exact>
                        <Book /> Projects
                    </SCNavLink>
                    <SCLink href="https://twitter.com/joaopedrodcf">
                        <Twitter /> Follow me
                    </SCLink>
                    <SCNavLink to="/contact-me" exact>
                        <Mail /> Contact me
                    </SCNavLink>
                </Sections>
            </Container>
        </SCSidebar>
    );
};

export default Sidebar;
