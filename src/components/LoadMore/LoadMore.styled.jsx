import styled from 'styled-components';

export const ButtonWrap = styled.div`
  margin: 0 auto;
`;

export const LoadMoreButton = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);
  transition: transform 350ms linear;

  &:hover,
  &:focus {
    color: #3f51b5;
    background-color: #ffffff;
    transform: scale(1.05);
  }
`;
