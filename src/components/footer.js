import { Col, Row, Typography } from 'antd'
import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
    <footer>
        <div className={styles.container}>
            <div className={styles.footerLeft}>
                <img
                    className={styles.logoFooter}
                    src="./logo-footer.png"
                    alt="footer-logo"
                />
                <Typography className={styles.textLogo}>
                    2021 Award winning Finance Advisor and Lorem ipsum dolor sit
                    amet
                </Typography>
                <div className={styles.socialLogo}>
                    <a href="https://facebook.com" target="_blank">
                        <img src="./fb-logo.png" alt="footer-fb-logo" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        className={styles.twiterLogo}
                    >
                        <img src="./twiter-logo.png" alt="footer-twiter-logo" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="./ins-logo.png" alt="footer-instagram-logo" />
                    </a>
                </div>
            </div>
            <div className={styles.footerRight}>
                <div className={styles.footerRightItem}>
                    <Typography className={styles.footerTitle}>
                        Location
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        America
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        Asia
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        Europe
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        Africa
                    </Typography>
                </div>
                <div className={styles.footerRightItem}>
                    <Typography className={styles.footerTitle}>
                        Contact
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        About Me
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        Teams
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        Profile
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        FAQ
                    </Typography>
                </div>
                <div className={styles.footerRightItem}>
                    <Typography className={styles.footerTitle}>
                        Legals
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        Privacy
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        Disclaimer
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        Terms
                    </Typography>
                    <Typography className={styles.footerTitleItem}>
                        Company
                    </Typography>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
