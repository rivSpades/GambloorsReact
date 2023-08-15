import React, { useContext } from 'react';
import Button from '../UI/Button';
import UserSettings from '../User/UserSettings';
import ModalContext from '../../store/context/modalState-context';
import AuthContext from '../../store/context/auth-context';
import GameWallet from '../Wallets/GameWallet';

function TopNavigation() {
  const modalCtx = useContext(ModalContext);
  const authCtx = useContext(AuthContext);

  return (
    <header className="w-full z-[998] p-0 lg:px-6 lg:pt-6 fixed top-0 bg-secondary">
      <div className="topnav-container bg-primary sm:rounded-lg w-full h-24 flex items-center justify-between">
        <div className="nav-left self-center z-[999] flex items-center gap-4 text-primaryWhite">
          <button
            type="button"
            className="hidden xl:block sidebar-btn p-2 ml-3 text-2xl text-primaryWhite rounded-lg hover:bg-secondary focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
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
          </button>
          <a href="/">
            <svg
              className="ml-6 xl:ml-0 "
              width="138"
              height="15"
              viewBox="0 0 138 15"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0107422 7.00391C0.0107422 6.03711 0.192383 5.13477 0.555664 4.29688C0.918945 3.45312 1.44922 2.7207 2.14648 2.09961C2.84375 1.47852 3.69922 0.989258 4.71289 0.631836C5.73242 0.274414 6.89844 0.0957031 8.21094 0.0957031C8.68555 0.0957031 9.16016 0.12207 9.63477 0.174805C10.1152 0.22168 10.5869 0.297852 11.0498 0.40332C11.5186 0.508789 11.9727 0.643555 12.4121 0.807617C12.8574 0.96582 13.2793 1.15625 13.6777 1.37891L12.3945 3.48828C12.1543 3.34766 11.8818 3.22168 11.5771 3.11035C11.2725 2.99316 10.9443 2.89648 10.5928 2.82031C10.2471 2.73828 9.88672 2.67676 9.51172 2.63574C9.14258 2.59473 8.77051 2.57422 8.39551 2.57422C7.52832 2.57422 6.75488 2.68555 6.0752 2.9082C5.39551 3.125 4.82129 3.43262 4.35254 3.83105C3.88379 4.22363 3.52637 4.69531 3.28027 5.24609C3.03418 5.79688 2.91113 6.40039 2.91113 7.05664C2.91113 7.73633 3.04004 8.36035 3.29785 8.92871C3.55566 9.49707 3.92188 9.98633 4.39648 10.3965C4.87109 10.8066 5.44531 11.1289 6.11914 11.3633C6.79297 11.5918 7.5459 11.7061 8.37793 11.7061C9.04004 11.7061 9.64648 11.6328 10.1973 11.4863C10.748 11.334 11.2285 11.1201 11.6387 10.8447C12.0488 10.5693 12.3828 10.2383 12.6406 9.85156C12.8984 9.45898 13.0684 9.01953 13.1504 8.5332H8.35156V6.23926H15.6553V6.24805L15.6641 6.23926C15.8105 6.94238 15.8545 7.62793 15.7959 8.2959C15.7432 8.95801 15.5908 9.58496 15.3389 10.1768C15.0928 10.7627 14.7529 11.3018 14.3193 11.7939C13.8857 12.2861 13.3672 12.7109 12.7637 13.0684C12.1602 13.4199 11.4746 13.6953 10.707 13.8945C9.93945 14.0879 9.09863 14.1846 8.18457 14.1846C6.90723 14.1846 5.76172 13.9971 4.74805 13.6221C3.74023 13.2471 2.88477 12.7344 2.18164 12.084C1.47852 11.4336 0.939453 10.6719 0.564453 9.79883C0.195312 8.92578 0.0107422 7.99414 0.0107422 7.00391ZM21.8357 0.262695H24.7889L31.4334 14H28.5066L27.408 11.6885H19.3836L18.3201 14H15.3846L21.8357 0.262695ZM26.3094 9.39453L23.3387 3.1543L20.4471 9.39453H26.3094ZM31.7779 0.262695H34.5641L39.5562 5.27246L44.5484 0.262695H47.3346V14H44.5484V4.12109L39.5562 8.92871L34.5641 4.12109V14H31.7779V0.262695ZM49.4457 0.262695H56.7846C57.6811 0.262695 58.4604 0.359375 59.1225 0.552734C59.7904 0.740234 60.3441 1.00098 60.7836 1.33496C61.223 1.66895 61.5482 2.06738 61.7592 2.53027C61.976 2.9873 62.0844 3.48242 62.0844 4.01562C62.0844 4.88867 61.809 5.65332 61.2582 6.30957C61.891 6.68457 62.3627 7.1709 62.6732 7.76855C62.9838 8.36621 63.1391 9.0459 63.1391 9.80762C63.1391 10.4463 63.0307 11.0234 62.8139 11.5391C62.6029 12.0547 62.2777 12.4971 61.8383 12.8662C61.4047 13.2295 60.8539 13.5107 60.1859 13.71C59.5238 13.9033 58.7416 14 57.8393 14H49.4457V0.262695ZM57.8568 5.53613C58.0971 5.53613 58.3314 5.54492 58.56 5.5625C58.9525 5.1875 59.1488 4.75977 59.1488 4.2793C59.1488 3.78125 58.9525 3.39746 58.56 3.12793C58.1732 2.85254 57.6049 2.71484 56.8549 2.71484H52.2318V5.53613H57.8568ZM57.9096 11.5742C58.6596 11.5742 59.2279 11.4131 59.6146 11.0908C60.0072 10.7686 60.2035 10.3145 60.2035 9.72852C60.2035 9.14258 60.0072 8.68555 59.6146 8.35742C59.2279 8.0293 58.6596 7.86523 57.9096 7.86523H52.2318V11.5742H57.9096ZM64.1691 0.262695H66.9553V11.5566H74.9445V14H64.1691V0.262695ZM75.043 7.0918C75.043 6.05469 75.2334 5.10547 75.6143 4.24414C75.9951 3.38281 76.5283 2.64453 77.2139 2.0293C77.9053 1.4082 78.7314 0.927734 79.6924 0.587891C80.6592 0.248047 81.7285 0.078125 82.9004 0.078125C84.0664 0.078125 85.1328 0.248047 86.0996 0.587891C87.0664 0.927734 87.8926 1.4082 88.5781 2.0293C89.2695 2.64453 89.8057 3.38281 90.1865 4.24414C90.5674 5.10547 90.7578 6.05469 90.7578 7.0918C90.7578 8.13477 90.5674 9.09277 90.1865 9.96582C89.8057 10.833 89.2695 11.5801 88.5781 12.207C87.8926 12.834 87.0664 13.3232 86.0996 13.6748C85.1328 14.0205 84.0664 14.1934 82.9004 14.1934C81.7285 14.1934 80.6592 14.0205 79.6924 13.6748C78.7314 13.3232 77.9053 12.834 77.2139 12.207C76.5283 11.5801 75.9951 10.833 75.6143 9.96582C75.2334 9.09277 75.043 8.13477 75.043 7.0918ZM77.8291 7.0918C77.8291 7.80078 77.9551 8.43945 78.207 9.00781C78.4648 9.57617 78.8193 10.0625 79.2705 10.4668C79.7275 10.8652 80.2637 11.1729 80.8789 11.3896C81.5 11.6064 82.1738 11.7148 82.9004 11.7148C83.627 11.7148 84.2979 11.6064 84.9131 11.3896C85.5342 11.1729 86.0703 10.8652 86.5215 10.4668C86.9727 10.0625 87.3271 9.57617 87.585 9.00781C87.8428 8.43945 87.9717 7.80078 87.9717 7.0918C87.9717 6.38281 87.8428 5.74707 87.585 5.18457C87.3271 4.62207 86.9727 4.14746 86.5215 3.76074C86.0703 3.36816 85.5342 3.06934 84.9131 2.86426C84.2979 2.65918 83.627 2.55664 82.9004 2.55664C82.1738 2.55664 81.5 2.65918 80.8789 2.86426C80.2637 3.06934 79.7275 3.36816 79.2705 3.76074C78.8193 4.14746 78.4648 4.62207 78.207 5.18457C77.9551 5.74707 77.8291 6.38281 77.8291 7.0918ZM91.243 7.0918C91.243 6.05469 91.4334 5.10547 91.8143 4.24414C92.1951 3.38281 92.7283 2.64453 93.4139 2.0293C94.1053 1.4082 94.9314 0.927734 95.8924 0.587891C96.8592 0.248047 97.9285 0.078125 99.1004 0.078125C100.266 0.078125 101.333 0.248047 102.3 0.587891C103.266 0.927734 104.093 1.4082 104.778 2.0293C105.47 2.64453 106.006 3.38281 106.387 4.24414C106.767 5.10547 106.958 6.05469 106.958 7.0918C106.958 8.13477 106.767 9.09277 106.387 9.96582C106.006 10.833 105.47 11.5801 104.778 12.207C104.093 12.834 103.266 13.3232 102.3 13.6748C101.333 14.0205 100.266 14.1934 99.1004 14.1934C97.9285 14.1934 96.8592 14.0205 95.8924 13.6748C94.9314 13.3232 94.1053 12.834 93.4139 12.207C92.7283 11.5801 92.1951 10.833 91.8143 9.96582C91.4334 9.09277 91.243 8.13477 91.243 7.0918ZM94.0291 7.0918C94.0291 7.80078 94.1551 8.43945 94.407 9.00781C94.6648 9.57617 95.0193 10.0625 95.4705 10.4668C95.9275 10.8652 96.4637 11.1729 97.0789 11.3896C97.7 11.6064 98.3738 11.7148 99.1004 11.7148C99.827 11.7148 100.498 11.6064 101.113 11.3896C101.734 11.1729 102.27 10.8652 102.721 10.4668C103.173 10.0625 103.527 9.57617 103.785 9.00781C104.043 8.43945 104.172 7.80078 104.172 7.0918C104.172 6.38281 104.043 5.74707 103.785 5.18457C103.527 4.62207 103.173 4.14746 102.721 3.76074C102.27 3.36816 101.734 3.06934 101.113 2.86426C100.498 2.65918 99.827 2.55664 99.1004 2.55664C98.3738 2.55664 97.7 2.65918 97.0789 2.86426C96.4637 3.06934 95.9275 3.36816 95.4705 3.76074C95.0193 4.14746 94.6648 4.62207 94.407 5.18457C94.1551 5.74707 94.0291 6.38281 94.0291 7.0918ZM108.252 0.262695H115.239C116.294 0.262695 117.208 0.374023 117.981 0.59668C118.754 0.813477 119.396 1.12988 119.906 1.5459C120.416 1.96191 120.794 2.46875 121.04 3.06641C121.292 3.66406 121.418 4.34082 121.418 5.09668C121.418 5.60645 121.356 6.09277 121.233 6.55566C121.11 7.0127 120.92 7.43457 120.662 7.82129C120.41 8.20801 120.09 8.55371 119.704 8.8584C119.317 9.15723 118.863 9.40625 118.341 9.60547L121.33 14H117.92L115.336 10.0977H115.256L111.038 10.0889V14H108.252V0.262695ZM115.309 7.68066C115.837 7.68066 116.296 7.61914 116.689 7.49609C117.088 7.37305 117.419 7.2002 117.682 6.97754C117.952 6.75488 118.151 6.48535 118.28 6.16895C118.415 5.84668 118.482 5.48926 118.482 5.09668C118.482 4.3291 118.218 3.7373 117.691 3.32129C117.164 2.89941 116.37 2.68848 115.309 2.68848H111.038V7.68066H115.309ZM123.564 9.91309C124.062 10.1943 124.566 10.4492 125.076 10.6777C125.591 10.9004 126.124 11.0908 126.675 11.249C127.226 11.4014 127.803 11.5186 128.407 11.6006C129.016 11.6826 129.663 11.7236 130.349 11.7236C131.175 11.7236 131.878 11.6709 132.458 11.5654C133.038 11.4541 133.51 11.3047 133.873 11.1172C134.243 10.9238 134.509 10.6953 134.673 10.4316C134.843 10.168 134.928 9.88086 134.928 9.57031C134.928 9.07227 134.72 8.67969 134.304 8.39258C133.888 8.09961 133.246 7.95312 132.379 7.95312C131.998 7.95312 131.597 7.97949 131.175 8.03223C130.753 8.0791 130.326 8.13184 129.892 8.19043C129.464 8.24902 129.039 8.30469 128.618 8.35742C128.202 8.4043 127.809 8.42773 127.44 8.42773C126.825 8.42773 126.233 8.34863 125.664 8.19043C125.102 8.03223 124.601 7.79492 124.162 7.47852C123.728 7.16211 123.382 6.7666 123.124 6.29199C122.867 5.81738 122.738 5.26367 122.738 4.63086C122.738 4.25586 122.787 3.88379 122.887 3.51465C122.993 3.14551 123.157 2.79395 123.379 2.45996C123.608 2.12012 123.901 1.80664 124.258 1.51953C124.616 1.22656 125.046 0.974609 125.55 0.763672C126.06 0.552734 126.646 0.388672 127.308 0.271484C127.976 0.148438 128.735 0.0869141 129.584 0.0869141C130.2 0.0869141 130.818 0.12207 131.439 0.192383C132.06 0.256836 132.663 0.350586 133.249 0.473633C133.841 0.59668 134.41 0.746094 134.954 0.921875C135.499 1.0918 136.006 1.28223 136.475 1.49316L135.253 3.74316C134.867 3.57324 134.451 3.41797 134.005 3.27734C133.56 3.13086 133.094 3.00488 132.608 2.89941C132.121 2.79395 131.618 2.71191 131.096 2.65332C130.58 2.58887 130.053 2.55664 129.514 2.55664C128.746 2.55664 128.114 2.6123 127.616 2.72363C127.123 2.83496 126.731 2.97852 126.438 3.1543C126.145 3.32422 125.94 3.51758 125.823 3.73438C125.711 3.94531 125.656 4.15625 125.656 4.36719C125.656 4.77734 125.84 5.11426 126.209 5.37793C126.579 5.63574 127.141 5.76465 127.897 5.76465C128.202 5.76465 128.55 5.74414 128.943 5.70312C129.341 5.65625 129.757 5.60645 130.191 5.55371C130.63 5.50098 131.076 5.4541 131.527 5.41309C131.984 5.36621 132.426 5.34277 132.854 5.34277C133.662 5.34277 134.377 5.43359 134.998 5.61523C135.625 5.79688 136.15 6.05762 136.572 6.39746C136.994 6.73145 137.313 7.13867 137.53 7.61914C137.746 8.09375 137.855 8.62695 137.855 9.21875C137.855 10.0098 137.67 10.7158 137.301 11.3369C136.938 11.9521 136.416 12.4736 135.737 12.9014C135.063 13.3232 134.248 13.6455 133.293 13.8682C132.338 14.085 131.275 14.1934 130.103 14.1934C129.329 14.1934 128.574 14.1436 127.835 14.0439C127.097 13.9502 126.388 13.8154 125.708 13.6396C125.035 13.458 124.39 13.2441 123.775 12.998C123.165 12.7461 122.6 12.4707 122.079 12.1719L123.564 9.91309Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        {authCtx.isLoggedIn && (
          <div className="flex gap-4">
            <GameWallet />
            <Button
              text="Deposit"
              type="highlight"
              className="flex-grow sm:grow-0"
            />
          </div>
        )}

        <nav className="nav-right flex items-center gap-4 relative">
          {authCtx.isLoggedIn ? (
            <UserSettings />
          ) : (
            <React.Fragment>
              {' '}
              <Button
                type="outline"
                text="Login"
                onClick={() => modalCtx.toggleModalHandler('loginModal')}
              />
              <Button
                type="highlight"
                text="Register"
                onClick={() => modalCtx.toggleModalHandler('registerModal')}
              />
            </React.Fragment>
          )}
        </nav>
      </div>
    </header>
  );
}

export default TopNavigation;