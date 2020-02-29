import { Column, Header, Row } from './style';
import Global from '../../styles';
import { Helmet } from 'react-helmet';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ContactMe = () => (
    <Global.Container>
        <Helmet>
            <title>Contact me |</title>
        </Helmet>
        <Column>
            <form noValidate autoComplete="off">
                <Header>
                    <h1>Contact me</h1>
                </Header>
                <Row>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        required
                    />
                </Row>
                <Row>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type="email"
                        required
                    />
                </Row>
                <Row>
                    <TextField
                        id="outlined-basic"
                        label="Message"
                        variant="outlined"
                        multiline
                        required
                    />
                </Row>
                <Row>
                    <Button variant="contained" color="primary" type="submit">
                        Send message
                    </Button>
                </Row>
            </form>
        </Column>
    </Global.Container>
);

export default ContactMe;
