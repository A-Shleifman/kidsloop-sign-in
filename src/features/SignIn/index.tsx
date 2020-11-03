import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Button from 'components/Button';
import logo from 'features/SignIn/kidsloop_min_logo.svg';

const Wrapper = styled.div`
  min-width: 300px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  ${tw`flex-grow flex flex-col justify-center rounded-large py-8 px-6 m-3`}
`;

const Form = styled.form`
  min-width: 200px;
`;

const Input = tw.input`
  w-full p-3 my-1 border rounded-large placeholder-gray-500 border-gray-500 focus:outline-none
`;

const Link = tw.a`flex items-center text-sm text-navy hover:underline`;

export default () => {
  const [loading, setLoading] = useState(false);

  const onSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Wrapper>
      <img src={logo} alt="logo" className="h-12 self-start" />

      <h1 className="text-2xl py-8">Sign In</h1>

      <Form onSubmit={onSignIn} action="#" method="post">
        <Input
          name="email"
          type="email"
          placeholder="Email or Phone *"
          autoComplete="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
          required
        />

        <Input
          name="password"
          type="password"
          placeholder="Password *"
          autoComplete="current-password"
          minLength={8}
          required
        />

        <div className="flex justify-between">
          <Link href="#">Forgot Password?</Link>

          <Button type="submit" disabled={loading} className="text-sm">
            {loading ? 'Loading...' : 'Sign In'}
          </Button>
        </div>
      </Form>

      <Link href="#" className="mt-6">
        Create an account
      </Link>
    </Wrapper>
  );
};
