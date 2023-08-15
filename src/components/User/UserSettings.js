import React, { useState, useEffect, useRef, useContext } from 'react';
import AuthContext from '../../store/context/auth-context';
function UserSettings() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const avatarRef = useRef(null);
  const authCtx = useContext(AuthContext);
  const toggleDropdownHandler = () => {
    console.log('clicked');
    setDropdownVisible((prevValue) => !prevValue);
  };

  const onClickOutsideHandler = (e) => {
    if (
      dropdownRef.current.contains(e.target) ||
      avatarRef.current.contains(e.target) ||
      dropdownRef.current.className.includes('hidden')
    ) {
      return;
    }

    setDropdownVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutsideHandler);

    return () => {
      document.removeEventListener('click', onClickOutsideHandler);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <div
        id="nav-user-details"
        className="nav-user-details pr-6 cursor-pointer"
        onClick={toggleDropdownHandler}
      >
        <div
          ref={avatarRef}
          className="user-details-avatar relative w-8  overflow-hidden bg-transparent text-primaryWhite rounded-full flex gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" "
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
          </svg>
        </div>
      </div>
      <div
        id="user-details-dropdown"
        className={`${
          isDropdownVisible ? '' : 'hidden'
        } nav-card-details font-medium w-44 absolute top-[150%] right-0`}
        ref={dropdownRef}
      >
        <div className="px-4 py-3 text-sm text-primaryWhite">
          <div></div>
          <div className="font-medium truncate"></div>
        </div>
        <ul className="py-2 text-sm text-primaryWhite">
          <li>
            <a href="#wallet" className="block px-4 py-2 hover:bg-accent">
              Wallet
            </a>
          </li>
          <li>
            <a href="#account" className="block px-4 py-2 hover:bg-accent">
              Settings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <button
            href="#"
            onClick={authCtx.onLogout}
            className=" w-full nav-btn-signout block px-4 py-2 text-sm text-left text-primaryWhite hover:bg-accent"
          >
            Sign out
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserSettings;
