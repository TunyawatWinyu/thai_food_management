import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { users } from "../data/users";

const Navbar = () => {
  const user = users[0];
  return (
    <nav className="flex items-center justify-between border-b border-gray-700 px-8 pb-2">
      <span className="flex flex-col">
        <span className="font-bold">Benvenuto, {user.name} 👋</span>
        <span className="text-xs text-gray-400">martedì 18 agosto</span>
      </span>
      <span className="flex items-center gap-3">
        <span className="cursor-pointer rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-200 ">
          <FontAwesomeIcon icon={faBell} />
        </span>

        <span className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-thai-green text-white">
            {user.name.charAt(0)}
          </span>

          <span className="mr-2">{user.name}</span>
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
