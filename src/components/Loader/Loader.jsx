import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  <MagnifyingGlass
    visible={true}
    height="80"
    width="80"
    ariaLabel="MagnifyingGlass-loading"
    wrapperStyle={{ justifyContent: 'center' }}
    wrapperClass="MagnifyingGlass-wrapper"
    glassColor="#c0efff"
    color="#e15b64"
  />;
};
