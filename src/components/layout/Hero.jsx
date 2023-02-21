import React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from '../styles/Button'
import Text from '../styles/Text'

const heroImageAnimation = keyframes`
    0%{
        transform: scale(0.80);
    }

    30%{
        transform: scale(0.80);
    }

    70%{
        transform: scale(0.6);
    }

    100%{
        transform: scale(0.6);
    }
`

const heroDotsAnimation = keyframes`
    0%{
        top: 100%;
        transform: scale(1);
        opacity: 1;
    }
    100%{
        top : 0;
        transform: scale(0);
        opacity: 0;
    }
`

const MyHero = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 70px;
    position: relative;

    @media screen and (max-width: 1170px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 80px;

    }

    .left{
       display: flex;
       flex-direction: column;
       justify-content: flex-end;
       gap: 35px;

       max-width: 630px;

       p{
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        color: #81AFDD;
       }

       .input{
        display: flex;
        background-color: #052D56;
        border-radius: 5px 0px 0px 5px;
        
        input{
            flex : 1;
            outline :none;
            font-weight: 400;
            font-size: 20px;
            line-height: 27px;
            color: #3D6184;
            border: none;
            background-color: transparent;
            padding: 0 32px;
        }

        input::placeholder{
            color: #3D6184;
        }
       }

       .avatars{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;

        .left{
            display: flex;
            flex-direction: row;
            gap: 0px;
            position: relative;
            width: 175px;
            height: 36px;
            & > span{
                display: flex;
                align-items: center;
                justify-content: center;
                aspect-ratio : 1/1;
                width: 36px;
                border: 3px solid #fff;
                border-radius: 50%;
                overflow: hidden;

                font-weight: 800;
                font-size: 8px;
                line-height: 38px;
                color: #000000;
                background-color: #13DED2;

                position: absolute;
                left: calc(var(--left) * 23px);
                top: 0;

                & > img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                
            }
        }
       }
       .right{
        font-weight: 500;
        font-size: 12px;
        line-height: 38px;
        color: #FFFFFF;
       }

       @media screen and (max-width : 700px) {
        max-width: 100%;
        gap: 20px;
        h1{
            width: 100%;
            font-size: 35px;
            line-height: 45px;
        }
        p{
            width: 100%;
            font-size: 16px;
            line-height: 23px;
        }
        
        .input{
            input{
                width: 100%;
                font-size: 16px;
                line-height: 23px;
                padding: 10px 20px
            }
        }
        .avatars{
            flex-direction: column;
            p{
                text-align: center;
                line-height: normal;
            }
        }
       }
    } 

    .right{
        position: relative;

        @media screen and (max-width : 700px) {
            width: 300px;
        }

        .dotEffects{
            position: absolute;
            inset: 0;
            z-index: -1;

            span{
                width: calc(var(--width) * 5px);
                aspect-ratio: 1/1;
                background-color: #516377;
                display: inline-block;
                border-radius: 50%;
                left : calc(var(--left)  * 10px);
                top: 50%;
                position: absolute;
                opacity: 0;
                animation: ${heroDotsAnimation} calc(var(--delay) * 10s) infinite;
                animation-delay: calc(var(--delay) * 1s);
                animation-fill-mode: forwards;
            }
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        & > img:nth-child(3){
            position: absolute;
            top: 0%;
            left: 0%;
            transform-origin: center center;
            transform: scale(0.8);

            animation: ${heroImageAnimation} 3s ease-in infinite alternate;
        }

        .effect {
            width: 285px;
            height: 285px;
            background: #0F6BCD;
            filter: blur(107px);
            position: absolute;;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }  
    }

    & > .effect{
        width: 701px;
        height: 496px;
        bottom: 0px;
        right: 0px;
        background: #072D56;
        filter: blur(282px);
        position: absolute;
        transform: translate(50%, 50%);
        z-index: -1;
    }
`
const Hero = () => {
    return (
        <MyHero className="container">
            <div className="left">
                <Text as="h1" width="613">Let’s Build Something amazing with GPT-3 OpenAI</Text>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="input">
                    <input type="email" placeholder='Your Email Address' />
                    <Button fontSize="20px" fontWeight="700" padding="20px 36px">Get Started</Button>
                </div>
                <div className="avatars">
                    <div className="left">
                        <span style={{ "--left": 0 }}><img src="/avatars/1.svg" alt="USER" /></span>
                        <span style={{ "--left": 1 }}><img src="/avatars/2.svg" alt="USER" /></span>
                        <span style={{ "--left": 2 }}><img src="/avatars/3.svg" alt="USER" /></span>
                        <span style={{ "--left": 3 }}><img src="/avatars/4.svg" alt="USER" /></span>
                        <span style={{ "--left": 4 }}><img src="/avatars/5.svg" alt="USER" /></span>
                        <span style={{ "--left": 5 }}><img src="/avatars/6.svg" alt="USER" /></span>
                        <span style={{ "--left": 6 }}>1.6k+</span>
                    </div>
                    <p className="right">1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="right">
                <div className="dotEffects">
                    <span style={{ "--width": 2, "--left": 2, "--delay": 5 }}></span>
                    <span style={{ "--width": 4, "--left": 6, "--delay": 2 }}></span>
                    <span style={{ "--width": 3, "--left": 15, "--delay": 3 }}></span>
                    <span style={{ "--width": 1, "--left": 18, "--delay": 2.5 }}></span>
                    <span style={{ "--width": 6, "--left": 20, "--delay": 1 }}></span>
                    <span style={{ "--width": 2, "--left": 30, "--delay": 1.5 }}></span>
                    <span style={{ "--width": 4, "--left": 40, "--delay": 1.3 }}></span>
                    <span style={{ "--width": 2, "--left": 45, "--delay": 1.8 }}></span>
                </div>
                <img src="/heroImg.svg" alt="HERO" />
                <img src="/frame.png" alt="FRAME" />
                <div className="effect"></div>
            </div>
            <div className="effect"></div>
        </MyHero>
    )
}

export default Hero