import React from 'react';
import { SCImage, SCLazyLoad } from './style';

const Image = ({
    imageUrl,
    altText,
    size,
    isThumbnail,
    isToLazyLoad,
    width
}) => {
    const ImageComponent = (
        <SCImage
            src={imageUrl}
            alt={altText}
            size={size}
            isThumbnail={isThumbnail}
            width={width}
        />
    );

    if (isToLazyLoad) {
        return (
            <SCLazyLoad
                size={size}
                offset={500}
                throttle={250}
                debounce={false}
                width={width}
            >
                {ImageComponent}
            </SCLazyLoad>
        );
    }

    return { ImageComponent };
};

export default Image;
