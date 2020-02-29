/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: center;
    margin: 32px 0 12px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    font-size: 18px;
    text-align: justify;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    font-size: 18px;
    text-align: justify;
`;

export const Text = styled.div`
    h1 {
        margin-bottom: 24px;
        text-align: center;
    }
    p {
        margin-bottom: 12px;
    }
`;
