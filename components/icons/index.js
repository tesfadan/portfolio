import React from 'react';
import styled, { css } from 'styled-components'
import colors from '../../styles/Colors';

export default function MenuIcon({ showMenu, onClick, show }) {
    return <CustomMenuWrapper className="customMenuIcon" state={showMenu} onClick={onClick} style={show ? { top: 26, opacity: 1 } : { top: -20, opacity: 0 }}>
        <span className="menuTop" />
        <span className="menuBottom" />
    </CustomMenuWrapper>
}

const CustomMenuWrapper = styled.span`
        display: flex;
        width: 32px;
        flex-flow: column;
        justify-content: space-between;
        height: 14px;
        margin: auto;
        overflow:hidden;
        z-index: 109;
        cursor: pointer;
        transition: 0.2s ease-in;

        span{
            height: 3px;
            width: 32px;
            background: ${colors.black};
            transition:0.125s ease-in;
        }

        ${props => props.state && css`
            /* background-color:red; */
            .menuTop{
                /* transform: rotate(45deg) translate(8px); */
            }
            .menuBottom{
                transition:0.25s ease-in;
                transform: translateX(16px)
            }
        `}

        &:hover{
            .menuBottom{
                transform: translateX(16px)
            }
        }
`