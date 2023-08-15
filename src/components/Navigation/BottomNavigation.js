import React from 'react';
import { Link } from 'react-router-dom';

function BottomNavigation() {
  return (
    <nav className="fixed xl:hidden bottom-0 p-2 w-full z-[999] ">
      <div className=" w-full rounded-full    h-16 bg-primary border border-accent">
        <div className="grid h-full w-full grid-cols-5 mx-auto">
          <Link href=".." className="bottomnav-btn group">
            <svg
              className="bottomnav-svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>

            <span className="bottomnav-btn-text">Menu</span>
          </Link>
          <Link to="dice" className="bottomnav-btn group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="bottomnav-svg"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M202.2,200.8a103.8,103.8,0,0,0,0-145.6,2.3,2.3,0,0,0-.7-.7,2.3,2.3,0,0,0-.7-.7,103.8,103.8,0,0,0-145.6,0,2.3,2.3,0,0,0-.7.7,2.3,2.3,0,0,0-.7.7,103.8,103.8,0,0,0,0,145.6l.7.7a2.3,2.3,0,0,0,.7.7,103.8,103.8,0,0,0,145.6,0,2.3,2.3,0,0,0,.7-.7A2.3,2.3,0,0,0,202.2,200.8ZM40.4,136H64.5a63.6,63.6,0,0,0,13,31.2L60.4,184.3A87.5,87.5,0,0,1,40.4,136Zm20-64.3L77.5,88.8a63.6,63.6,0,0,0-13,31.2H40.4A87.5,87.5,0,0,1,60.4,71.7ZM215.6,120H191.5a63.6,63.6,0,0,0-13-31.2l17.1-17.1A87.5,87.5,0,0,1,215.6,120ZM167.2,77.5a63.6,63.6,0,0,0-31.2-13V40.4a87.5,87.5,0,0,1,48.3,20ZM120,64.5a63.6,63.6,0,0,0-31.2,13L71.7,60.4a87.5,87.5,0,0,1,48.3-20Zm-31.2,114a63.6,63.6,0,0,0,31.2,13v24.1a87.5,87.5,0,0,1-48.3-20Zm47.2,13a63.6,63.6,0,0,0,31.2-13l17.1,17.1a87.5,87.5,0,0,1-48.3,20Zm42.5-24.3a63.6,63.6,0,0,0,13-31.2h24.1a87.5,87.5,0,0,1-20,48.3Z"></path>
            </svg>

            <span className="bottomnav-btn-text">Dice</span>
          </Link>
          <Link href=".." className="bottomnav-btn group">
            <svg
              className="bottomnav-svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span className="bottomnav-btn-text">Home</span>
          </Link>
          <a href="/wallet" className="bottomnav-btn group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bottomnav-svg"
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path>
            </svg>
            <span className="bottomnav-btn-text">Wallet</span>
          </a>
          <a href="/" className="bottomnav-btn group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bottomnav-svg sidebar-svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M216,48H40A16,16,0,0,0,24,64V222.8a15.7,15.7,0,0,0,9.3,14.5,16,16,0,0,0,17-2.2L82,208.4l134-.4a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48Z"></path>
            </svg>
            <span className="bottomnav-btn-text">Chat</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default BottomNavigation;
