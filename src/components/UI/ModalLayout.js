import React from 'react';
import ReactDOM from 'react-dom';

function ModalLayout(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <section className="fixed text-lg top-0 overflow-x-hidden  backdrop-blur-sm  z-[999] h-screen w-screen">
          <div className="relative  w-full flex items-center justify-center h-full ">
            <div className="relative overflow-y-scroll p-8 pb-16 sm:pb-20 w-full md:max-w-4xl min-h-[80%] max-h-[80%] sm:min-h-[50%]  bg-secondary border border-accent rounded-3xl shadow sm:p-5">
              <div className="grid gap-16 sm:gap-10  uppercase">
                <div className="modal-header flex flex-col gap-12 sm:gap-4">
                  <div className="flex justify-between items-center   rounded-lg  ">
                    <h3 className="text-primaryWhite text-xl font-semibold">
                      {props.title}
                    </h3>
                    <button
                      type="button"
                      className="modal-close text-primaryWhite border  border-accent/20 rounded-full  p-1 "
                      onClick={props.handler}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="modal-header-btns-container inline-flex w-full rounded-lg shadow-sm text-center"></div>
                  {props.children}
                </div>
              </div>
            </div>
          </div>
        </section>,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
}

export default ModalLayout;
