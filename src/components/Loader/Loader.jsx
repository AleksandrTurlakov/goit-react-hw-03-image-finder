import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <MagnifyingGlass
      height="100"
      width="100"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{
        justifyContent: 'center',
        marginTop: '40vh',
        marginLeft: '50vw',
        transform: 'translate(-50%, -50%)',
      }}
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};
