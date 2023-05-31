import React, { PropsWithChildren } from "react";
import "../globals.css";
import './styles/index.js'

const RootLayout = ({ children }) => (



    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>Navbar</div>
      <div className="grid md:grid-cols-sidebar">
        <div>Sidebar</div>
        {props.children}
      </div>
    </div>

);

export default RootLayout;