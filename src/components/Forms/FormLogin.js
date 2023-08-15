import React, { useRef, useContext } from 'react';
import Button from '../UI/Button';
import FormLayout from '../UI/FormLayout';
import StatusMessage from '../Popups/StatusMessage';
import AuthContext from '../../store/context/auth-context';
import useHttpRequest from '../../hooks/use-httpRequest';

function LoginForm() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const authCtx = useContext(AuthContext);
  const { isLoading, error, sendRequest, updateState } = useHttpRequest();

  async function submitHandler(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const data = await sendRequest(
        'https://still-frog-f6ef.riverspades336061.workers.dev/api/user/token/',
        'POST',
        { email, password }
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
      {isLoading ? (
        <Button text="Logging in" type="highlight-loading" />
      ) : (
        <Button text="Login" type="highlight" />
      )}
      {error && <StatusMessage text={error} />}
    </FormLayout>
  );
}

export default LoginForm;
