import { Col, Row, Typography } from 'antd'
import { RollbackOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import React, { useEffect, useState } from 'react'

import * as styles from './services-page.module.css'
import { Link } from 'gatsby'

const ServicesPage = (props) => {
    const { services } = props

    return (
        <div className={styles.services}>
            <Link to="/" className={styles.backToHome}>
                <RollbackOutlined />
                <Typography>Back to home</Typography>
            </Link>
            <div className={styles.servicesContent}>
                <Typography level={1} className={styles.headerService}>
                    High Quality Output, Awesome Service
                </Typography>

                <div className={styles.listService}>
                    {services &&
                        services.map((service) => {
                            return (
                                <div className={styles.serviceItem}>
                                    <div className={styles.groupIconService}>
                                        <img
                                            className={styles.checkIconCover}
                                            src="./check-icon-cover.png"
                                        />
                                        <img
                                            className={styles.checkIcon}
                                            src="./check-icon.png"
                                        />
                                    </div>
                                    <div className={styles.serviceText}>
                                        <h1>{service.node.title}</h1>
                                        <p>{service.node.subtitle}</p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
