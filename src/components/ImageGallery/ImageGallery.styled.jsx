import styled from 'styled-components';

export const ImageGalleryWrap = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ImageGalleryCard = styled.li`
  border-radius: 5px;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.3);
  transition: transform 350ms linear;
`;
