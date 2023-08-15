import React, { useContext } from 'react';
import ModalLayout from '../UI/ModalLayout';
import LoginForm from '../Forms/FormLogin';
import RegisterForm from '../Forms/FormRegister';
import ModalContext from '../../store/context/modalState-context';
function AuthModals() {
  const modalCtx = useContext(ModalContext);

  return (
    <React.Fragment>
      {modalCtx.modals.loginModal && (
        <ModalLayout
          title="Login"
          handler={() => modalCtx.toggleModalHandler('loginModal')}
        >
          <LoginForm />
        </ModalLayout>
      )}
      {modalCtx.modals.registerModal && (
        <ModalLayout
          title="Register"
          handler={() => modalCtx.toggleModalHandler('registerModal')}
        >
          <RegisterForm />
        </ModalLayout>
      )}
    </React.Fragment>
  );
}

export default AuthModals;
