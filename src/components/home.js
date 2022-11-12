import React from 'react'

import './variables.css'
import './global.css'
import * as styles from './home.module.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import { Typography } from 'antd'
class Home extends React.Component {
    render() {
        return (
            <>
                <Seo />
                <Navigation />
                {/* <main>{children}</main> */}
                <div className={styles.home}>
                    <div className={styles.homeContent}>
                        <div className={styles.homeLeftContent}>
                            <Typography className={styles.homeLeftContentTitle}>
                                Financial Advisor For Next Level Happy Life!
                            </Typography>
                            <Typography
                                className={styles.homeLeftContentSubTitle}
                            >
                                Are you looking for amazing financial advisor
                                services? Don’t worry! We got it for you!
                            </Typography>
                            <button className={styles.homeLeftContentBtn}>
                                Learn More
                            </button>
                        </div>
                        <div className={styles.homeRightContent}>
                            <img
                                className={styles.homeTopImg}
                                src="./home-img-top.png"
                            />
                            <img
                                className={styles.homeBottomImg}
                                src="./home-img-bottom.png"
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home
