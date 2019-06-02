import React from 'react';
import { Helmet } from 'react-helmet';
import { Column, Text } from './style';
import Global from '../../styles';
import Image from '../../components/shared/image';

const AboutUs = () => (
    <Global.Container>
        <Helmet>
            <title>
                About me | Joaopedrodcf web developer doing some react and node
            </title>
        </Helmet>
        <Column>
            <Image
                imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1559495993/portfolio/received_569641929886979_3.jpg"
                altText="me"
                isToLazyLoad
                width="165px"
            />
            <Text>
                <h1>
                    <span role="img" aria-label="Computer">
                        💻
                    </span>
                    Portuguese Web Developer @farfetch
                </h1>
                <p>
                    Passionate about open source software and always eager to
                    learn new languages!
                </p>
                <p>
                    Since two years ago started a journey of self learning and
                    been improving the knowledge of my favorite language,
                    JavaScript.
                </p>
                <p>My favorite stack for developing is React and Node js!</p>
                <p>
                    Im the author of yokaidex an site/app that has been used by
                    real users and its been really rewarding to create something
                    that others find useful, and thats is my moto since I create
                    open source projects
                </p>
            </Text>
        </Column>
    </Global.Container>
);

export default AboutUs;
