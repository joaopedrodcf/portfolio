import React from 'react';

import { Helmet } from 'react-helmet';
import { Column, SCLink, Text } from './style';
import Global from '../../styles';
import Image from '../../components/shared/image';

const Projects = () => {
    return (
        <Global.Container>
            <Helmet>
                <title>
                    About me | Joaopedrodcf web developer doing some react and
                    node
                </title>
            </Helmet>
            <Column>
                <SCLink href="https://yokaidex.com">
                    <Image
                        imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1562620408/portfolio/yokaidex.png"
                        altText="yokaidex"
                        size="large"
                    />
                </SCLink>
                <Text>
                    <h1>Yokaidex</h1>
                    <p>
                        PWA for the Yo-kai Watch games, it contains all yo-kais
                        for Yo-kai Watch, their locations, stats, favorite
                        foods, skills and evolutions.
                    </p>
                    <p>With a really good user base of 4k this year!</p>
                </Text>
            </Column>
        </Global.Container>
    );
};

export default Projects;
