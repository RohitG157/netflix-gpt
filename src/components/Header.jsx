import { useNavigate } from "react-router";
import { signOutUser } from "../utils/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser();
    navigate("/");
  };
  return (
    <div className="absolute w-screen px-8 py-6 bg-linear-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="body-logo"
      />
      {user && (
        <div className="flex px-2">
          <img
            className="w-12 h-12 "
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          />
          <button
            type="button"
            className="px-2 text-white text-sm font-semibold cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
