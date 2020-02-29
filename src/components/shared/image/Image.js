import { SCImage, SCLazyLoad } from './style';
import React from 'react';

const Image = ({
    imageUrl,
    altText,
    size,
    isThumbnail,
    isToLazyLoad,
    width,
    height
}) => (
    <>
        {isToLazyLoad ? (
            <SCLazyLoad
                size={size}
                offset={500}
                throttle={250}
                debounce={false}
                width={width}
                height={height}
            >
                <SCImage
                    src={imageUrl}
                    alt={altText}
                    size={size}
                    isThumbnail={isThumbnail}
                    width={width}
                    height={height}
                />
            </SCLazyLoad>
        ) : (
            <SCImage
                src={imageUrl}
                alt={altText}
                size={size}
                isThumbnail={isThumbnail}
                width={width}
                height={height}
            />
        )}
    </>
);

export default React.memo(Image);
