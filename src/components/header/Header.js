/* eslint-disable react/destructuring-assignment */
import Container from './style';
import { SidebarContext } from '../../store/sidebar';
import React, { useContext } from 'react';
import Menu from 'react-feather/dist/icons/menu';

const Header = () => {
    const { handleSidebar } = useContext(SidebarContext);

    return (
        <Container>
            <div role="presentation" onClick={handleSidebar}>
                <Menu />
            </div>
            <div>
                <h1>Portfolio - Joao F.</h1>
            </div>
        </Container>
    );
};

export default Header;
