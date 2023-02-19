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
const myText = styled.h2`
    animation: ${myAnimation} 10s linear infinite;
`

export default styled(myText)((props) => `
    font-style: normal;
    font-weight: ${props.fontWeight || 800};
    font-size: ${props.fontSize || 24}px;
    line-height: ${props.lineHeight || 75}px;
    letter-spacing: ${props.letterSpacing || -0.04}em;
    color: #FFFFFF;
    position: relative;
    width : ${props.width ? props.width + 'px' : "content-fit"};

    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 38px;
        height: 3px;
        background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%), #FFFFFF;
    }
`)