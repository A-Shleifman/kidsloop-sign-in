import Footer from 'features/Footer';
import SignIn from 'features/SignIn';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  min-width: 300px;
  max-width: 400px;
  ${tw`flex flex-col items-center justify-center w-full h-screen dark:text-white dark:bg-gray-700`}
`;

function App() {
  return (
    <Wrapper>
      <div className="flex">
        <SignIn />
      </div>

      <Footer />
    </Wrapper>
  );
}

export default App;
