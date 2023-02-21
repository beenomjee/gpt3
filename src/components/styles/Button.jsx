import styled from "styled-components";

export default styled.button((props) => `
    background-color : #FF4820;
    outline: none;
    border-radius : 5px;
    font-size : ${props.fontSize};
    font-weight : ${props.fontWeight};
    padding : ${props.padding};
    color: #fff;
    cursor: pointer;
    border: 1px solid #FF4820;
    transition: opacity 0.2s;
    &:hover  {
        opacity: 0.8;
    }

    @media screen and (max-width : 700px){
        font-size: 12px;
        padding: 10px 20px;
    }
`)