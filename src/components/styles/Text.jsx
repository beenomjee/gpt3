import styled, { keyframes } from "styled-components";

const myAnimation = keyframes`
   from {
    -webkit-filter: hue-rotate(0);
    -moz-filter: hue-rotate(0);
    -ms-filter: hue-rotate(0);
    filter: hue-rotate(0);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
    -moz-filter: hue-rotate(360deg);
    -ms-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
    
`
const myH2 = styled.h2`
    animation: ${myAnimation} 10s linear infinite;
`

export default styled(myH2)((props) => `
    font-weight: ${props.fontWeight || 800};
    font-size: ${props.fontSize || 62}px;
    line-height: ${props.lineHeight || 75}px;
    letter-spacing: ${props.letterSpacing || -0.04}em;
    width : ${props.width ? props.width + "px" : "content-fit"};
    background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`)