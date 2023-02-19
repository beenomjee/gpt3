import React from 'react'
import styled from 'styled-components'
import Text from '../styles/Text'

const MyFooter = styled.footer`
    background-color: #031B34;
    margin-top: 150px;
    & > .top{
        padding-top: 175px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2{
            text-align: center;
        }

        button{
            border: 1px solid #FFFFFF;
            background-color: transparent;
            outline:none;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;
            padding: 20px 25px;
            display: inline-block;
            margin-top: 65px;
            cursor: pointer;
            transition: color 0.2s, background-color 0.2s;
            &:hover{
                color: #031B34;
                background-color: #FFFFFF;
            }
        }
    }
    & > .middle{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 180px;

        & > .left{
            h6{
                font-size: 30px;
                font-weight: 800;
            }

            p{
                width: 170px;
                font-size: 12px;
                line-height: 14px;
                color: #FFFFFF;
                margin-top: 25px;
            }
        }
        & > .right{
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            gap: 100px;

            & > .column{
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                h6{
                    font-size: 14px;
                    line-height: 16px;
                    color: #FFFFFF;
                    font-weight: 800;
                }

                & > a{
                    display: inline-block;
                    margin-top: 25px;
                    font-size: 12px;
                    line-height: 14px;
                    color: #FFFFFF;
                    width: 116px;
                    &:hover{
                        text-decoration: underline;
                    }
                }

                & > a:nth-child(2){
                    margin-top: 36px;
                }
            }
        }   
    }
    & > .bottom{
        text-align: center;
        margin-top: 80px;
        padding-bottom: 30px;

        span{
            font-size: 12px;
            line-height: 14px;
            font-feature-settings: 'liga' off;
            color: #FFFFFF;

            a:hover{
                text-decoration: underline;
            }
        }
    }
`

const Footer = () => {
    return (
        <MyFooter>
            <div className="top container">
                <Text width="821" fontSize="62" lineHeight="75" letterSpacing="-0.04">Do you want to step in to the future before others</Text>
                <button>Request Early Access</button>
            </div>
            <div className="middle container">
                <div className="left">
                    <h6>GPT-3</h6>
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="right">
                    <div className="column">
                        <h6>Links</h6>
                        <a href="#">Overons</a>
                        <a href="#">Social Media</a>
                        <a href="#">Counters</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="column">
                        <h6>Company</h6>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="column">
                        <h6>Get in touch</h6>
                        <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
                        <a href="#">085-132567</a>
                        <a href="#">info@payme.net</a>
                    </div>
                </div>
            </div>
            <div className="bottom container">
                <span>© 2021 <a href="#">GPT-3</a>. All rights reserved.</span>
            </div>
        </MyFooter>
    )
}

export default Footer