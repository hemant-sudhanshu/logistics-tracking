import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes, strings } from "../../../constants";
import { MenuItem, ProfileMenu } from "../..";
import { MenuIcon } from "../../../assets/svgs";
import logo from "../../../logo.svg";
import { useUserQuery } from "../../../queries";
import { useAuthContext } from "../../../hooks";

export const NavBar = ({ sticky = true }) => {
  // Constants for string literals
  const {
    common,
    primary: { home, common: homeCommon },
  } = strings;

  // State for controlling the visibility of the menu
  const [menuVisible, setMenuVisible] = useState(false);

  // Functions of Auth Context
  const { addUser } = useAuthContext();

  // API call to fetch user
  const { data: userData } = useUserQuery();

  // Update user data to the Auth Context
  useEffect(() => {
    if (userData) {
      addUser(userData);
    }
  }, [userData]);

  /** Function to toggle the visibility of the menu */
  const toggleMenu = () => setMenuVisible((prev) => !prev);

  /** Renders the header section of the navigation bar */
  const renderHeader = () => (
    <Link
      to={routes.root}
      className="flex items-center space-x-3 rtl:space-x-reverse mr-auto"
    >
      <img src={logo} className="size-8 h-8 md:size-10" alt="App logo" />
      <span className="hidden self-center whitespace-nowrap text-xl font-semibold text-color md:block md:text-2xl dark:text-color-dark">
        {common.appName}
      </span>
    </Link>
  );

  /** Renders the menu button */
  const renderMenuButton = () => (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="group inline-flex size-8 items-center justify-center rounded-lg p-1 text-sm text-light focus:outline-none focus:ring-2 focus:ring-border md:hidden md:size-10 md:p-2 dark:text-light-dark dark:focus:ring-border-dark"
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={toggleMenu}
    >
      <MenuIcon className="h-5 w-5 fill-light group-hover:fill-color" />
    </button>
  );

  /** Renders the menu items */
  const renderMenu = () => (
    <div
      className={`${
        menuVisible ? "block" : "hidden"
      } m-2 w-full md:block md:w-auto`}
      id="navbar-default"
    >
      <ul className="mt-4 flex flex-col rounded-lg border border-border bg-secondary p-4 font-medium md:mt-0 md:flex-row md:space-x-4 md:border-0 md:bg-background md:p-0 rtl:space-x-reverse dark:border-border-dark dark:bg-secondary-dark md:dark:bg-background-dark">
        <MenuItem href={routes.root}>{home.title}</MenuItem>
        <MenuItem href={routes.addNewShipment}>{homeCommon.addNew}</MenuItem>
        <MenuItem href={routes.about}>{homeCommon.about}</MenuItem>
        <MenuItem href={routes.termsCondition}>
          {homeCommon.termsOfUse}
        </MenuItem>
        <MenuItem href={routes.privacyPolicy}>
          {homeCommon.privacyPolicy}
        </MenuItem>
      </ul>
    </div>
  );

  return (
    <nav
      className={`${
        sticky ? "sticky" : ""
      } start-0 top-0 z-20 w-full border-b border-border bg-background shadow`}
    >
      <div className="flex flex-wrap items-center justify-between p-2 md:p-4">
        {renderHeader()}
        <div className="flex items-center space-x-2 md:order-2 md:space-x-3 rtl:space-x-reverse">
          <ProfileMenu user={userData} />
          {renderMenuButton()}
        </div>
        {renderMenu()}
      </div>
    </nav>
  );
};
