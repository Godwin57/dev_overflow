import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <p>This is the authentication part of the app</p>
            <main>{children}</main>
        </div>
    );
};

export default layout;
