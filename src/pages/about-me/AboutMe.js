import { Column, Text, Header } from './style';
import Global from '../../styles';
import Image from '../../components/shared/image';
import { Helmet } from 'react-helmet';
import React from 'react';

const AboutUs = () => (
    <Global.Container>
        <Helmet>
            <title>
                About me | Joaopedrodcf web developer doing some react and node
            </title>
        </Helmet>
        <Column>
            <Header>
                <h1>About me</h1>
            </Header>
            <Image
                imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1559495993/portfolio/received_569641929886979_3.jpg"
                altText="me"
                isToLazyLoad
                width="165px"
            />
            <Text>
                <p>
                    Passionate about open source software and always eager to
                    learn new things.
                </p>
                <p>
                    Since two years ago started a journey of self learning and
                    been improving the knowledge of my favorite language,
                    JavaScript!
                </p>
                <p>
                    My favorite stack for developing is React and Node js! Also
                    I&apos;m trying to learn Typescript at time, it&apos;s
                    really useful for productivity.
                </p>
                <p>
                    This year my main focus in terms of projects was Yokaidex,
                    learned so much from it, and it was so rewarding to have a
                    project used by so many users, over 18k since last year.
                </p>
                <p>
                    I also been working at Farfetch as a Frontend Developer
                    working on the Aquisition and Engament Cluster, doing AB
                    Testing in the site, providing possible better UX and UI
                    experiencies for our users.
                </p>
            </Text>
        </Column>
    </Global.Container>
);

export default AboutUs;
