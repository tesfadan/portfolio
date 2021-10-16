import React from 'react';
import styled, { css } from 'styled-components'
import colors from '../../styles/Colors';

export default function MenuIcon({ showMenu, switchMenu }: { showMenu: boolean, switchMenu: () => void, }) {
    return <CustomMenuWrapper className="customMenuIcon" state={showMenu}
        onClick={() => switchMenu()}

    // style = { show? { top: 26, opacity: 1 } : { top: -20, opacity: 0 } }
    >
        <span className="menuTop" />
        <span className="menuBottom" />
    </CustomMenuWrapper >
}

const CustomMenuWrapper = styled.span<{ state: boolean }>`
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
            background: #E2E5E9;
            transition:0.125s ease-in;
        }

        ${props => props.state && css`
            .menuBottom{
                transform: translateX(16px)
            }
        `}

        &:hover{
            .menuBottom{
                transform: translateX(16px)
            }
        }
        .customMenuIcon{
            opacity: 0.9;
        }
`