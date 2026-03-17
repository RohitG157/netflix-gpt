import { useNavigate } from "react-router";
import { signOutUser } from "../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { AVTAR, LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser();
    navigate("/");
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-6 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="body-logo" />
      {user && (
        <div className="flex px-2">
          <img className="w-12 h-12 " src={AVTAR} />
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
