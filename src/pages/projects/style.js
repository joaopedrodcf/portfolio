/* eslint-disable import/prefer-default-export */
import styles from '../../styles';
import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: center;
    margin: 32px 0 12px;
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

export const SCLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 6px;
    color: ${props => props.theme.color};
    text-decoration: none;

    svg {
        margin-right: 12px;
    }

    &:hover {
        color: ${styles.color.black};
        background-color: ${styles.color.black};
    }
`;

export const Text = styled.div`
    h2 {
        margin-bottom: 24px;
        text-align: center;
    }
    p {
        margin-bottom: 12px;
    }
`;
