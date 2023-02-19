import styled from "styled-components";

export default styled.button((props) => `
    background-color : transparent;
    border: none;
    outline: none;
    border-radius : 0px;
    font-size : ${props.fontSize || "18px"} ;
    font-weight : ${props.fontWeight || "500"};
    padding : ${props.padding};
    color: #fff;
    cursor: pointer;
    transition: opacity 0.2s;
    opacity: 0.7;
    &:hover  {
        opacity: 1;
        color : #FF4820;
    }

    &.active {
        opacity: 1;
        color : #FF4820;

    }
`)