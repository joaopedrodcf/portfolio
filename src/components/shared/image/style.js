import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';

export const SCImage = styled.img`
    width: ${props => {
        if (props.size === 'small') return '35px';
        if (props.size === 'medium') return '62px';
        if (props.size === 'large') return '150px';
        if (props.size === 'special') return '100px';

        return props.width;
    }};
    height: ${props => {
        if (props.size === 'small') return '35px';
        if (props.size === 'medium') return '62px';
        if (props.size === 'large') return '150px';
        if (props.size === 'special') return '25px';

        return '';
    }};
    background-color: ${props => {
        if (props.isThumbnail) return 'white';

        return 'none';
    }};
    border-radius: ${props => {
        if (props.isThumbnail) return '50%';

        return '0%';
    }};
`;

export const SCLazyLoad = styled(LazyLoad)`
    display: flex;
    align-items: center;

    height: ${props => {
        if (props.size === 'small') return '35px';
        if (props.size === 'medium') return '62px';
        if (props.size === 'large') return '150px';
        if (props.size === 'special') return '25px';

        return '';
    }};
`;