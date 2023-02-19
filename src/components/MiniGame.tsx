import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Container>
        <div className="screen card">
            <div className="content">
            <div className="cover">
                <img src="" />
            </div>
            <div className="text">Currently Listening to <span>Bahta’s Highlife</span> by Admas</div>
            </div>
            <button>Preview</button>
        </div>
    </Container>
  )
}


const Container = styled.div`
    position: absolute;
    width: 1200px;
    bottom: 72px;
    padding: 0px 96px;


    .screen{
        height: 96px;
        border: 2px solid;
        box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.75);
        border-radius: 20px;

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
        }
    }
`