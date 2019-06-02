import styled from 'styled-components';
import Styles from '../../styles';

const Container = styled.div`
    position: fixed;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    color: ${Styles.color.white};
    font-size: 24px;
    background-color: ${Styles.color.primary};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    div {
        display: flex;
        padding: 12px;
    }

    h1 {
        font-weight: 700;
        font-size: 20px;
        letter-spacing: 4px;
    }

    a {
        display: flex;
        align-items: center;
        color: ${Styles.color.black};
        text-decoration: none;
    }

    a:hover {
        color: ${Styles.color.black};
        text-decoration: none;
        cursor: pointer;
    }
`;

export default Container;
