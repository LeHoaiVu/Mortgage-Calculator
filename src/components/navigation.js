import React from 'react'
import { Link, Sc } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
    <nav role="navigation" className={styles.container} aria-label="Main">
        <Link to="/" className={styles.logoLink}>
            <img src="./nav-logo.png" alt="nav-logo" className={styles.logo} />
        </Link>
        <ul className={styles.navigation}>
            <li className={styles.navigationItem}>
                <Link to="/calculator" activeClassName="active">
                    Calculator
                </Link>
            </li>
            <li className={styles.navigationItem}>
                <Link to="/services" activeClassName="active">
                    Services
                </Link>
            </li>
        </ul>
    </nav>
)

export default Navigation
