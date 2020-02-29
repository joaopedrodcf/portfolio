import React, { useState } from 'react';

export const SidebarContext = React.createContext();

const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, toogleSideBar] = useState(false);

    const handleSidebar = () => {
        toogleSideBar(!isSidebarOpen);
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, handleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
