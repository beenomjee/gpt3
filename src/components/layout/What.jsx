import React from 'react'
import TextWithTopBar from '../styles/TextWithTopBar'
import Text from '../styles/Text'
import styled from 'styled-components'

const MyContainer = styled.div`
    background-color: #042C54;
    padding: 60px;
    margin: 130px auto 0 auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    position: relative;
    overflow: hidden;
    
    @media screen and (max-width: 1200px) {
        margin: 130px 20px 0 20px;
        @media screen and (max-width: 700px) {
            padding: 40px 30px;
        }
    }

    .top{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        p{
            width: 730px;
            font-weight: 500;
            font-size: 16px;
            line-height: 30px;
            color: #81AFDD;
        }

        @media screen and (max-width: 1170px) {
            flex-direction: column;
            gap: 20px;
            @media screen and (max-width: 900px) {
                p{
                    width: auto;
                }
                @media screen and (max-width: 700px) {
                    p{
                        line-height: 25px;
                    }
                }
            }
        }
       
    }

    .middle{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 90px;

        @media screen and (max-width: 900px) {
            flex-direction: column;
            gap: 20px;
            @media screen and (max-width: 700px) {
                margin-top: 50px;
                h2{
                    width: 100%;
                }
            }
        }
        
    }

    .bottom{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 40px;
        margin-top: 90px;
        @media screen and (max-width: 900px) {
            flex-direction: column;
            gap: 60px;
        }
        .column{
            flex : 1;

            p{
                font-weight: 500;
                font-size: 16px;
                line-height: 30px;
                color: #81AFDD;
                margin-top: 25px;

                @media screen and (max-width: 900px) {
                   margin-top: 0px;
                }
            }
        }
    }

    .effect1{
        position : absolute;
        width: 581px;
        height: 410px;
        left: 0px;
        top: 0px;
        background: #0F4279;
        filter: blur(60px);
        transform: translate(-70%, -70%);
        z-index: -1;
    }
    .effect2{
        position : absolute;
        width: 623px;
        height: 558px;
        right: 0px;
        bottom: 0px;
        background: #0F4279;
        filter: blur(60px);
        transform: translate(70%, 70%);
        z-index: -1;
    }
`

const What = () => {
    return (
        <MyContainer className='container'>
            <div className="top">
                <TextWithTopBar>What is GPT-3</TextWithTopBar>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>

            <div className="middle">
                <Text width="472" fontSize="34" lineHeight="45" letterSpacing="0">The possibilities are beyond your imagination</Text>
                <Text as="a" href="#" fontSize="16" lineHeight="30" fontWeight="500" letterSpacing="0">Explore The Library</Text>
            </div>
            <div className="bottom">
                <div className="column">
                    <TextWithTopBar className='top'>Chatbots</TextWithTopBar>
                    <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
                </div>
                <div className="column">
                    <TextWithTopBar className='top'>Knowledgebase</TextWithTopBar>
                    <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                </div>
                <div className="column">
                    <TextWithTopBar className='top'>Education</TextWithTopBar>
                    <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                </div>
            </div>
            <div className="effect1"></div>
            <div className="effect2"></div>
        </MyContainer>
    )
}

export default What