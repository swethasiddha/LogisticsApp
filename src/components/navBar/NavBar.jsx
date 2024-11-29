import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../../redux/userdataSlice";

function NavBar() {
  const currentUser = useSelector((state) => state.userdata.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <div className="flex flex-wrap bg-white justify-between items-center shadow-md">
        <div>
          <img
            className="w-30 h-24"
            src="https://th.bing.com/th/id/R.f2557a8f6b995fd57431b2af3e0e9a1f?rik=sxRneYwWFJbhpw&riu=http%3a%2f%2fcommunity.cargoes.com%2fin%2fimages%2fglobal%2fcustomer8.png&ehk=TKzz9J5zAkIrviCPl66e65lxV4Q3ORgEhTdbSIuPGXc%3d&risl=&pid=ImgRaw&r=0"
            alt="Company Logo"
          />
        </div>

        <div>
          <ul className="flex space-x-6 text-lg">
            <li className="p-3 cursor-pointer hover:underline">Search</li>
            <li className="p-3 cursor-pointer hover:underline">Help</li>
            <li className="p-3">
              {currentUser ? `Welcome, ${currentUser}` : "Not logged in"}
            </li>
            {currentUser && (
              <li
                className="p-3 cursor-pointer text-blue-600 hover:underline"
                onClick={handleLogout}
              >
                Logout
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
