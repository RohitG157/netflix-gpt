import { useNavigate } from "react-router";
import { signOutUser } from "../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { AVTAR, LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changePreferredLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const langRef = useRef();
  const user = useSelector((store) => store.user);
  const isGptSearchEnabled = useSelector(
    (store) => store.gptSearch.showGptSearch,
  );
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const togglePreferredLanguage = (e) => {
    const selectedLang = langRef.current.value;
    dispatch(changePreferredLanguage(selectedLang));
  };
  return (
    <div className="absolute w-screen px-8 py-6 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="body-logo" />
      {user && (
        <div className="flex px-2 items-center">
          <div>
            {isGptSearchEnabled && (
              <select
                ref={langRef}
                className="bg-red-700 text-white px-2 py-3 mr-4 appearance-none"
                onChange={togglePreferredLanguage}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              type="button"
              className="py-3 px-4 mr-4 text-white bg-amber-600"
              onClick={handleGptSearchClick}
            >
              {isGptSearchEnabled ? "Home" : "GPT Search"}
            </button>
          </div>

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
