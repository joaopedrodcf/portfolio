import React from 'react';
import SidebarProvider from './sidebar';

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
        (kids, parent) =>
            React.cloneElement(parent, {
                children: kids
            }),
        children
    );
}

function ContextProvider({ children }) {
    return (
        <ProviderComposer contexts={[<SidebarProvider />]}>
            {children}
        </ProviderComposer>
    );
}

export default ContextProvider;
