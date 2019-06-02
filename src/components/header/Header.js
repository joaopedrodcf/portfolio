/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Menu from 'react-feather/dist/icons/menu';
import Container from './style';

import { withSidebarContext } from '../../store';

function Header({ context }) {
    return (
        <Container>
            <div role="presentation" onClick={context.handleSidebar}>
                <Menu />
            </div>
            <div>
                <h1>Portfolio - Joao F.</h1>
            </div>
        </Container>
    );
}

export default withSidebarContext(Header);
