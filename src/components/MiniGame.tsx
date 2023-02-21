import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Container className='section'>
        <div className="grid">
        <div className="gameScreen card">
            <div className="content">
                <img className="cover" src="" />
                <div className="text">Currently Listening to <span>Bahta’s Highlife</span> by Admas</div>
                </div>
                <button>Preview</button>
            </div>
        </div>
    </Container>
  )
}


const Container = styled.div`
    /* position: absolute; */
    /* width: 1200px; */
    /* bottom: 72px; */
    /* padding: 0px 96px; */
    position: absolute;
    bottom: 56px;
    width: 100%;

    .gameScreen{
        /* height: 96px; */
        border-radius: 20px;
        grid-column: 1/7;


        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        line-height: 140%;
        padding: 16px;
        padding-right: 36px;



        .content{
            display: flex;
            align-items: center;
        }
        button{
            margin-left: 24px;
        }

        span{
            font-weight: 500;
        }

        .cover{
            width: 64px;
            height: 64px;
            left: 16px;
            top: 16px;

            background: #363232;
            border-radius: 12px;
            margin-right: 16px;

            object-fit: cover;
        }
    }

    /* IPAD */
    @media (max-width: 834px) {
        .gameScreen{
            padding: 12px;
            padding-right: 24px;
            font-size: 16px;
        }
        .gameScreen .cover{
            width: 48px;
            height: 48px;
            min-width: 48px;
            min-height: 48px;
        }
    }

    /* LG MOBILE */
    @media (max-width: 640px) {
        /* display: none; */
        bottom: 36px;
        .gameScreen{
            padding: 8px;
            padding-right: 8px;
            font-size: 14px;
            border-radius: 14px;
        }
        .gameScreen .cover{
            margin-right: 8px;
            border-radius: 6px;
        }
        button{
            display: none;
        }
    }
`