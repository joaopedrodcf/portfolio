import SCSidebar from './Sidebar';
import { SidebarContext } from '../../store/sidebar';
import React, { useContext } from 'react';
import ReactSidebar from 'react-sidebar';

const styles = {
    sidebar: { background: 'white', position: 'fixed' },
    root: {
        overflow: 'initial'
    },
    content: {
        overflowY: 'initial'
    }
};

const sidebar = <SCSidebar />;

const Sidebar = ({ children }) => {
    const { isSidebarOpen, handleSidebar } = useContext(SidebarContext);

    return (
        <ReactSidebar
            sidebar={sidebar}
            open={isSidebarOpen}
            onSetOpen={handleSidebar}
            styles={styles}
        >
            {children}
        </ReactSidebar>
    );
};

export default Sidebar;
