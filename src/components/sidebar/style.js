import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import styles from '../../styles';

export const SCSidebar = styled.div`
    width: 256px;
    height: 100%;
    padding-top: 56px;
    background-color: ${styles.color.white};

    * {
        font-weight: 500;
        font-size: 18px;
        text-align: start;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SCNavLink = styled(NavLink).attrs({
    activeClassName: 'active'
})`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    color: ${styles.color.black};
    text-decoration: none;
    background-color: ${styles.color.white};
    transition: all 250ms ease-in-out;
    will-change: transform;

    svg {
        margin-right: 12px;
    }

    &:hover {
        color: ${styles.color.white};
        background-color: ${styles.color.primary};
    }

    &.active {
        color: ${styles.color.white};
        background-color: ${styles.color.primary};
    }

    &.active > svg {
        color: ${styles.color.white};
    }
`;

export const SCLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    color: ${styles.color.black};
    text-decoration: none;
    background-color: ${styles.color.white};
    transition: all 250ms ease-in-out;
    will-change: transform;

    svg {
        margin-right: 12px;
    }

    &:hover {
        color: ${styles.color.white};
        background-color: ${styles.color.primary};
    }

    &.active {
        color: ${styles.color.white};
        background-color: ${styles.color.primary};
    }
`;

export const Sections = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props => (props.showMargin ? '12px 0' : '')};
    border-top: ${props => (props.showBorder ? '2px solid #bdbdbd' : '')};
`;

export const SectionsHeader = styled.div`
    padding: 6px 12px 12px 12px;
    color: ${styles.color.black};
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    background-color: ${styles.color.white};
`;

export const ToggleSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    text-decoration: none;
    background-color: ${styles.color.white};
    transition: all 250ms ease-in-out;
    will-change: transform;
`;

export const ToggleText = styled.div`
    margin-left: 12px;
    color: ${styles.color.white};
`;
