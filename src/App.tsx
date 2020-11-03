import Footer from 'features/Footer';
import SignIn from 'features/SignIn';
import React from 'react';
import tw from 'twin.macro';

const Wrapper = tw.div`
  flex flex-col items-center justify-center w-full h-screen dark:text-white dark:bg-gray-700
`;

function App() {
  return (
    <Wrapper>
      <div className="flex flex-col" style={{ minWidth: 300, maxWidth: 400 }}>
        <SignIn />

        <Footer />
      </div>
    </Wrapper>
  );
}

export default App;
