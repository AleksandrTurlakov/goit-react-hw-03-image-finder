import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreButton, ButtonWrap } from './LoadMore.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <ButtonWrap>
      <LoadMoreButton type="button" onClick={onClick}>
        Load more
      </LoadMoreButton>
    </ButtonWrap>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
