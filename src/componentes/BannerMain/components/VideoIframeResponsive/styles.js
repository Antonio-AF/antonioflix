import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 57.25%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  box-shadow: green;
  top: 100;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;