import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUtensils,
  faReceipt,
  faBox,
  faUsers,
  faMoneyBill,
  faChartColumn,
  faGear,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

interface MenuItem {
  label: string;
  icon: IconDefinition;
  path: string;
}

export default function Sidebar() {
  const menuItems: MenuItem[] = [
    {
      label: "Dashboard",
      icon: faHouse,
      path: "/dashboard",
    },
    {
      label: "Orders",
      icon: faReceipt,
      path: "/orders",
    },
    {
      label: "Menu",
      icon: faUtensils,
      path: "/menu",
    },
    {
      label: "Inventory",
      icon: faBox,
      path: "/inventory",
    },
    {
      label: "Customers",
      icon: faUsers,
      path: "/customers",
    },
    {
      label: "Finances",
      icon: faMoneyBill,
      path: "/finances",
    },
    {
      label: "Reports",
      icon: faChartColumn,
      path: "/reports",
    },
    {
      label: "Settings",
      icon: faGear,
      path: "/settings",
    },
  ];
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-thai-green text-white">
      {/* Logo */}
      <div className="flex h-20 items-center mx-5 border-b border-gray-700">
        <h1 className="flex items-center gap-3 text-xl font-bold">
          <FontAwesomeIcon
            icon={faUtensils}
            className="bg-red-700 px-2 py-3 rounded-xl"
          />{" "}
          <span className="flex flex-col">
            <span>Thai Food</span>
            <span className="text-xs font-normal">Management</span>
          </span>
        </h1>
      </div>
      {/* Menu */}
      <nav className="my-5 mx-5">
        {menuItems.map((item) => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `mb-2 flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-red-800 ${
                  isActive
                    ? "bg-red-800 text-white"
                    : "text-gray-400 hover:bg-red-800 hover:text-white"
                }`
              }
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
        {/* Settings */}
        <div className="absolute bottom-6 left-0 w-full px-4">
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-800"
          >
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </a>
        </div>
      </nav>
    </aside>
  );
}
