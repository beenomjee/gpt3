import React from 'react'
import styled from 'styled-components'
import Text from '../styles/Text'

const MyContainer = styled.div`
    margin-top: 150px;

    & > .bottom{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 50px;
        margin-top: 110px;

        .blog{
            display: flex;
            flex-direction: column;
            .top{
                flex: 0.65;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 30px 0 0 0;
                }
            }
            .bottom{
                flex: 1;
                background-color: #042C54;
                padding : 7px 25px 25px 25px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                & > *{
                    display: block;
                }

                span{
                    font-weight: 700;
                    font-size: 11.649px;
                    line-height: 35px;
                    color: #FFFFFF;
                }

                h3{
                    font-weight: 800;
                    font-size: 19px;
                    line-height: 30px;
                    color: #FFFFFF;
                    flex: 1;
                }

                a{
                    font-weight: 700;
                    font-size: 11.649px;
                    line-height: 35px;
                    color: #FFFFFF;

                    &:hover{
                        text-decoration: underline;
                    }
                }


            }
        }

        .blog:nth-child(1){
            grid-row-start: 1;
            grid-row-end: 3;

            .bottom{
                flex: 1;
                padding : 25px 25px;

                h3{
                    font-size: 21px;
                }
            }
        }
    }
`

const Blog = () => {
    return (
        <MyContainer className="container">
            <Text className='top' width="700" fontSize="62" lineHeight="75" letterSpacing="-0.04">A lot is happening,<br />We are blogging about it.</Text>

            <div className="bottom">
                <div className="blog">
                    <div className="top"><img src="/blog/1.png" alt="DATA" /></div>
                    <div className="bottom">
                        <span>Sep 26, 2021</span>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <a href="#">Read Full Article</a>
                    </div>
                </div>
                <div className="blog">
                    <div className="top"><img src="/blog/2.png" alt="DATA" /></div>
                    <div className="bottom">
                        <span>Sep 26, 2021</span>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <a href="#">Read Full Article</a>
                    </div>
                </div>
                <div className="blog">
                    <div className="top"><img src="/blog/3.png" alt="DATA" /></div>
                    <div className="bottom">
                        <span>Sep 26, 2021</span>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <a href="#">Read Full Article</a>
                    </div>
                </div>
                <div className="blog">
                    <div className="top"><img src="/blog/4.png" alt="DATA" /></div>
                    <div className="bottom">
                        <span>Sep 26, 2021</span>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <a href="#">Read Full Article</a>
                    </div>
                </div>
                <div className="blog">
                    <div className="top"><img src="/blog/5.png" alt="DATA" /></div>
                    <div className="bottom">
                        <span>Sep 26, 2021</span>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <a href="#">Read Full Article</a>
                    </div>
                </div>
            </div>
        </MyContainer>
    )
}

export default Blog