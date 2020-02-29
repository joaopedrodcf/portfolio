import SidebarProvider from './sidebar';
import React from 'react';

const ProviderComposer = ({ contexts, children }) => {
    return contexts.reduceRight(
        (kids, parent) =>
            React.cloneElement(parent, {
                children: kids
            }),
        children
    );
};

const ContextProvider = ({ children }) => {
    return (
        <ProviderComposer contexts={[<SidebarProvider />]}>
            {children}
        </ProviderComposer>
    );
};

export default ContextProvider;
