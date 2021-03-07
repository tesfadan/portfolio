import styled, { css } from 'styled-components';

export const LinkButton = styled.a`
        display: block;
        width:max-content;
        border-radius:4px;
        padding: 10px 18px;
        color: #e2e7ec;
        border: 1px solid #3e98ff;
        transition: 0.15s ease;
        position: relative;
        top: 0px;
        box-shadow: 0px 0px 32px #00000000;
        &:hover, &:focus{
            background: #3e98ff10;
            border: 1px solid #A1CDFF40;
        }

        ${props => props.small && css`
            padding: 8px 14px;
        `}
`;


export const Button = styled.button`
        display: block;
        width:max-content;
        border-radius:4px;
        padding: 16px 18px;
        color: #e2e7ec;
        border: 1px solid #3e98ff;
        transition: 0.15s ease;
        position: relative;
        top: 0px;
        box-shadow: 0px 0px 32px #00000000;
        &:hover, &:focus{
            background: #3e98ff10;
            border: 1px solid #A1CDFF40;
        }
`