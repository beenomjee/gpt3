import React from 'react'
import styled, { keyframes } from 'styled-components'
import Text from '../styles/Text'

const circleAnimation = keyframes`
    from{
        border-width: 3px;
        opacity: 1;
    }

    to{
        border-width: 300px;
        opacity: 0;
    }
`

const MyContainer = styled.div`
    margin-top: 70px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 30px;
    @media screen and (max-width: 1170px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 120px;
    }


    .left{
        width: 545px;
        height: 605px;
        position: relative;
        flex: 1;

        @media screen and (max-width: 1170px) {
            flex : none;
            order: 2;
        }
        @media screen and (max-width: 700px) {
            transform : scale(0.5);
            margin : -127px  0;
        }

        & > img{
            position: absolute;
            bottom: 0;
            right: 0;
        }

        .rectangle{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 365px;
            height: 400px;
            background: #042C54;
            border-radius: 0px 185px 0px 0px;
            z-index: -1;
        }

        .message{
            position: absolute;
            top: 55px;
            left: 50px;
            background: #042C54;
            border-radius: 16px;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .apps{
            position: absolute;
            bottom: 400px;
            right: 50px;
            background: #FF8A71;
            border-radius: 16px;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            z-index: -1;

            span{
                font-weight: 700;
                font-size: 20px;
                line-height: 30px;
            }
        }

        .circles{
            position: absolute;
            top: 175px;
            left: 170px;
            z-index: -1;

            span{
                border: 3px solid #042C54;
                width: calc(100px + (50px * var(--width)));
                aspect-ratio: 1/1;
                display: block;
                position: absolute;
                transform: translate(-50%,-50%);
                border-radius: 50%;
            }

            span:nth-child(1){
                animation: ${circleAnimation} 1s infinite;
            }
        }

    
    }

    .right{
        flex: 1;
        margin-bottom: 30px;

        @media screen and (max-width: 1170px) {
            flex : none;
            order: 1;
        }

        p{
            font-weight: 500;
            font-size: 16px;
            line-height: 30px;
            color: #71E5FF;
        }

        h2{
            margin-top: 10px;

            @media screen and (max-width: 700px) {
                width: 100%;
                font-size: 25px;
                line-height: 35px;
            }
        }

        .message{
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
            color: #81AFDD;
            margin-top: 25px;
            @media screen and (max-width: 1170px) {
                width: 425px;
                @media screen and (max-width: 700px) {
                    width : 100%;
                }
            }
        }

        a{
            margin-top: 30px;
            display: inline-block;
        }
    }
`

const Feature2 = () => {
    return (
        <MyContainer className="container">
            <div className="left">
                <img src="/girlImg.png" alt="Girl" />
                <div className="rectangle"></div>
                <div className="message"><img src="/message.svg" alt="Message" /></div>
                <div className="apps"><img src="/category.svg" alt="Categories" /><span>My Apps</span></div>
                <div className="circles"><span style={{ "--width": 0.5 }}></span><span style={{ "--width": 1 }}></span><span style={{ "--width": 2 }}></span><span style={{ "--width": 3 }}></span><span style={{ "--width": 4 }}></span></div>
            </div>
            <div className="right">
                <p>Request Early Access to Get Started</p>
                <Text width="425" fontSize="34" lineHeight="45" letterSpacing="0">The possibilities are beyond your imagination</Text>
                <p className='message'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <Text as="a" href="#" fontSize="16" lineHeight="30" fontWeight="500" letterSpacing="0">Request Early Access to Get Started</Text>
            </div>
        </MyContainer>
    )
}

export default Feature2