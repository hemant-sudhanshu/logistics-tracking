import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { routes } from "../constants";

const RootLayout = ({ isAuthenticated = true }) => {
  return (
    <div className="w-screen">
      <header>
        <nav>
          <h1>Logistics Tracking</h1>
          <NavLink to={routes.root}>Home</NavLink>
          <NavLink to={routes.about}>About</NavLink>
          <NavLink to={routes.signIn}>Sign In</NavLink>
          <NavLink to={routes.signUp}>Sign Up</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
