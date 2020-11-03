import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.button`
  :hover {
    filter: brightness(90%);
  }
  ${tw`text-white bg-blue rounded-large p-2 my-2 w-24 focus:outline-none disabled:bg-gray-600`}
`;
