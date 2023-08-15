import React, { useRef, useContext } from 'react';
import Button from '../UI/Button';
import FormLayout from '../UI/FormLayout';
import StatusMessage from '../Popups/StatusMessage';
import AuthContext from '../../store/context/auth-context';
import useHttpRequest from '../../hooks/use-httpRequest';

function RegisterForm() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const nameRef = useRef('');

  const authCtx = useContext(AuthContext);

  const { isLoading, error, sendRequest, updateState } = useHttpRequest();

  async function submitHandler(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      updateState({
        error: 'Passwords dont match',
        isLoading: false,
      });

      return;
    }
    try {
      const data = await sendRequest(
        'https://still-frog-f6ef.riverspades336061.workers.dev/api/user/create/',
        'POST',
        { email, password, name }
      );

      const token = data.access;
      authCtx.onLogin(token);
    } catch (err) {
      updateState({
        error: err.message,
      });
    }
  }

  return (
    <FormLayout submitHandler={submitHandler}>
      <div className="">
        <label htmlFor="name" className="input-title">
          name
        </label>
        <input
          type="text"
          id="anem"
          className="input"
          placeholder="Enter Your Name"
          ref={nameRef}
          required
        />
      </div>
      <div className="">
        <label htmlFor="email" className="input-title">
          email
        </label>
        <input
          type="email"
          id="email"
          className="input"
          placeholder="youremail@email.com"
          ref={emailRef}
          required
        />
      </div>
      <div className="">
        <label htmlFor="password" className="input-title">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input"
          ref={passwordRef}
          required
        />
      </div>
      <div className="">
        <label htmlFor="confirm-password" className="input-title">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          className="input"
          ref={confirmPasswordRef}
          required
        />
      </div>
      {isLoading ? (
        <Button text="Registering" type="highlight-loading" />
      ) : (
        <Button text="Register" type="highlight" />
      )}
      {error && <StatusMessage text={error} />}
    </FormLayout>
  );
}

export default RegisterForm;
