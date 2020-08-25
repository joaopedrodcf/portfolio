import React from 'react';
import { Typography } from '@material-ui/core';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@material-ui/lab';
import cx from 'classnames';
import styles from './index.module.css';
import developerActivity from '../../images/developer-activity.svg';
import codeinspection from '../../images/code_inspection.svg';
import businessman from '../../images/businessman.svg';
import construction from '../../images/construction.jpg';

const AboutMe = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>Joao Ferreira</div>

                <div className={styles.links}>
                    <div>Home</div>
                    <div>About me</div>
                    <div>Projects</div>
                    <div>Carrer</div>
                    <div>Contact me</div>
                </div>
            </header>
            <div className={cx(styles.row, styles.section)}>
                <div className={cx(styles['col-1-2'], styles.presentation)}>
                    <h2>
                        I Love to code and create software that is meaningful to
                        users.
                    </h2>
                    <p>Front-end speciliazed in React Js Applications</p>
                </div>
                <div className={styles['col-1-2']}>
                    <img
                        className={styles.img}
                        src={developerActivity}
                        alt="joaopedrodcf"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className={cx(styles.row, styles.section)}>
                <div className={styles['col-1-3']}>
                    <img
                        className={styles.img}
                        src={codeinspection}
                        alt="joaopedrodcf"
                        loading="lazy"
                    />
                </div>
                <div className={cx(styles['col-2-3'], styles.aboutme)}>
                    <h2>About me</h2>
                    <p>
                        I Love to code and create software that is meaningful to
                        users. This love for UX and UI was something that
                        started since I started using the web, and learning how
                        things are made.
                    </p>
                    <p>
                        You can see me code my side projects on github where I
                        do fullstack projects all in Javascript my to go
                        language. One of my projects yokaidex hit 18k last year,
                        hope it continues to help the gaming community!
                    </p>
                </div>
            </div>
            <div className={styles.heading}>
                <h2>Projects</h2>
            </div>
            <div className={cx(styles.row, styles.section)}>
                <div className={cx(styles['col-1-3'], styles.project)}>
                    <div className={styles.projectImg}>
                        <a href="https://yokaidex.netlify.com">
                            <img
                                src="https://res.cloudinary.com/dcrcweea8/image/upload/v1562620408/portfolio/yokaidex.png"
                                alt="yokaidex"
                                loading="lazy"
                                className={styles.img}
                            />
                        </a>
                    </div>
                    <div className={styles.projectInfo}>
                        <h2>Yokaidex</h2>
                        <p>
                            A Wiki page where you can find all the information
                            from Yo-kai Watch games!
                        </p>
                    </div>
                </div>
                <div className={cx(styles['col-1-3'], styles.project)}>
                    <div className={styles.projectImg}>
                        <a href="https://blog-mern-demo.herokuapp.com">
                            <img
                                src="https://res.cloudinary.com/dcrcweea8/image/upload/v1562620408/portfolio/blog-mern.png"
                                alt="blog-mern"
                                loading="lazy"
                                className={styles.img}
                            />
                        </a>
                    </div>
                    <div className={styles.projectInfo}>
                        <h2>Blog-mern</h2>
                        <p>
                            A blog create where you can create an account to
                            create content and comment other&rsquo;s content.
                        </p>
                    </div>
                </div>
                <div className={cx(styles['col-1-3'], styles.project)}>
                    <div className={styles.projectImg}>
                        <a href="https://blog-mern-demo.herokuapp.com">
                            <img
                                src={construction}
                                alt="blog-mern"
                                loading="lazy"
                                className={styles.img}
                            />
                        </a>
                    </div>
                    <div className={styles.projectInfo}>
                        <h2>New project</h2>
                        <p>
                            It will be about something Im really passionate
                            about
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx(styles.row, styles.section)}>
                <div className={cx(styles['col-2-3'], styles.carrer)}>
                    <h2>Carrer</h2>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h4">
                                    Back-end developer
                                </Typography>
                                <Typography variant="h5">Timwe</Typography>
                                <Typography>
                                    Used Java to make services and rest APIs for
                                    mobile subscription services
                                </Typography>
                                <Typography>Marc 2017 - May 2018</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h4">
                                    Front-end developer
                                </Typography>
                                <Typography variant="h5">Farfetch</Typography>
                                <Typography>
                                    Using React Js and Javascript to create
                                    pages like Wishlist, AB Testing and
                                    contributing to the inovation of the
                                    company.
                                </Typography>
                                <Typography>Jul 2018 - Present</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className={cx(styles['col-1-3'], styles.aboutme)}>
                    <img
                        className={styles.img}
                        src={businessman}
                        alt="joaopedrodcf"
                        loading="lazy"
                    />
                </div>
            </div>
            <a href="https://www.freepik.com/vectors/construction">
                Construction vector created by stories - www.freepik.com
            </a>
        </>
    );
};

export default AboutMe;
