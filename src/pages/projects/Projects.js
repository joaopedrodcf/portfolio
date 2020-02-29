import { Column, SCLink, Text, Header } from './style';
import Global from '../../styles';
import Image from '../../components/shared/image';
import { Helmet } from 'react-helmet';
import React from 'react';

const Projects = () => {
    return (
        <Global.Container>
            <Helmet>
                <title>
                    Projects | Joaopedrodcf web developer doing some react and
                    node
                </title>
            </Helmet>
            <Header>
                <h1>Projects</h1>
            </Header>
            <Column>
                <SCLink href="https://yokaidex.netlify.com/">
                    <Image
                        imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1562620408/portfolio/yokaidex.png"
                        altText="yokaidex"
                        size="large"
                    />
                </SCLink>
                <Text>
                    <h2>Yokaidex</h2>
                    <p>
                        A Wiki page where you can find all the information from
                        Yo-kai Watch games!
                    </p>
                </Text>
            </Column>
            <Column>
                <SCLink href="https://blog-mern-demo.herokuapp.com/">
                    <Image
                        imageUrl="https://res.cloudinary.com/dcrcweea8/image/upload/v1562620408/portfolio/blog-mern.png"
                        altText="blog-mern"
                        size="large"
                    />
                </SCLink>
                <Text>
                    <h2>Blog-mern</h2>
                    <p>
                        A blog create where you can create an account to create
                        content and comment other&rsquo;s content.
                    </p>
                </Text>
            </Column>
        </Global.Container>
    );
};

export default Projects;
