/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import styles from '../../styles';

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    font-size: 18px;
    text-align: justify;
`;

export const SCLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    color: ${props => props.theme.color};
    text-decoration: none;

    svg {
        margin-right: 12px;
    }

    &:hover {
        color: ${styles.color.black};
        background-color: #fdd835;
    }

    &.active {
        color: ${styles.color.black};
        background-color: #fdd835;
    }
`;

export const Text = styled.div`
    h1 {
        margin-bottom: 24px;
        font-size: 24px;
        text-align: center;
    }
    p {
        margin-bottom: 12px;
    }
`;
