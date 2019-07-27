import React from 'react';

import { Helmet } from 'react-helmet';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Column, SCLink, Text } from './style';
import Global from '../../styles';
import Image from '../../components/shared/image';

const PROJECTS = gql`
    {
        projects {
            id
            title
            description
            image
        }
    }
`;

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
                <Query query={PROJECTS}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;

                        return data.projects.map(
                            ({ title, description, image }) => (
                                <>
                                    <SCLink href="https://yokaidex.com">
                                        <Image
                                            imageUrl={image}
                                            altText={title}
                                            size="large"
                                        />
                                    </SCLink>
                                    <Text>
                                        <h1>{title}</h1>
                                        <p>{description}</p>
                                    </Text>
                                </>
                            )
                        );
                    }}
                </Query>
            </Column>
        </Global.Container>
    );
};

export default Projects;
