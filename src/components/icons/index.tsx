import React from 'react';
import styled, { css } from 'styled-components'

export default function MenuIcon({ showMenu, switchMenu }: { showMenu: boolean, switchMenu: () => void, }) {
    return <CustomMenuWrapper className="customMenuIcon" state={showMenu} role="button" aria-label="Mobile Menu Button"
        onClick={() => switchMenu()}

    // style = { show? { top: 26, opacity: 1 } : { top: -20, opacity: 0 } }
    >
        <span className="menuTop" />
        <span className="menuBottom" />
    </CustomMenuWrapper >
}

export const Shuffle = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.25 23.75L35 27.5L31.25 31.25M31.25 8.75L35 12.5L31.25 16.25M5 27.5H11.6555C12.6843 27.5 13.6972 27.246 14.6044 26.7605C15.5115 26.2751 16.2847 25.5732 16.8555 24.7172L20 20" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12.5H11.6555C12.6843 12.5 13.6972 12.754 14.6044 13.2395C15.5115 13.7249 16.2847 14.4268 16.8555 15.2828L23.1445 24.7172C23.7153 25.5732 24.4885 26.2751 25.3956 26.7605C26.3028 27.246 27.3157 27.5 28.3445 27.5H32.5M32.5 12.5H28.3445C27.3157 12.5 26.3028 12.754 25.3956 13.2395C24.4885 13.7249 23.7153 14.4268 23.1445 15.2828L22.5 16.25" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


const CustomMenuWrapper = styled.div<{ state: boolean }>`
        display: flex;
        width: 32px;
        flex-flow: column !important;
        justify-content: space-around !important;
        height: 14px;
        margin: auto;
        overflow: hidden !important;
        z-index: 109;
        cursor: pointer;
        /* transition: 0.2s ease-in; */
        -webkit-box-pack: justify !important;

        span{
            height: 3px;
            width: 32px;
            /* background: #E2E5E9; */
            /* background: #f00; */
            transition:0.125s ease-in;
        }

        ${props => props.state && css`
            .menuBottom{
                transform: translateX(16px)
            }
        `}

        /* &:hover{
            .menuBottom{
                transform: translateX(16px)
            }
        } */
`

export const Contrast = ({color}:{color: string})=> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2.00005C13.2311 2.0001 10.5244 2.82121 8.22214 4.35955C5.91989 5.8979 4.12552 8.08438 3.06591 10.6425C2.0063 13.2007 1.72905 16.0155 2.26923 18.7313C2.8094 21.447 4.14273 23.9415 6.10062 25.8994C7.39831 27.21 8.94214 28.2512 10.6434 28.9632C12.3447 29.6753 14.17 30.0442 16.0143 30.0487C17.8586 30.0533 19.6856 29.6934 21.3904 28.9897C23.0952 28.286 24.6441 27.2524 25.9482 25.9483C27.2523 24.6442 28.2859 23.0952 28.9896 21.3904C29.6933 19.6856 30.0532 17.8586 30.0487 16.0143C30.0441 14.17 29.6752 12.3448 28.9632 10.6435C28.2511 8.9422 27.2099 7.39836 25.8994 6.10068C24.6024 4.79656 23.0597 3.76264 21.3604 3.05877C19.6612 2.3549 17.8392 1.99505 16 2.00005ZM4 16.0001C4 9.38318 9.38312 4.00005 16 4.00005V28.0001C9.38312 28.0001 4 22.6169 4 16.0001Z" fill={color}/>
</svg>
