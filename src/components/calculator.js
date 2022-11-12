import { Col, Row, Slider, Typography } from 'antd'
import 'antd/dist/antd.css'
import { RollbackOutlined } from '@ant-design/icons'

import { Link } from 'gatsby'

import React, { useCallback, useMemo, useState } from 'react'

import * as styles from './calculator-page.module.css'
import Footer from './footer'

const CalculatorPage = ({}) => {
    const [perchasePrice, setPurchasePrice] = useState(450000)
    const [downPayment, setDownPayment] = useState(135000)
    const [repaymentTime, setRepaymentTime] = useState(25)
    const [interestRate, setInterestRate] = useState(3)

    // The result of Loan amount will change based on Purchase Price and Down Payment
    const calculateLoanAmount = useMemo(() => {
        return perchasePrice - downPayment
    }, [perchasePrice, downPayment])

    // The result of Estimated repayment per month
    // will change based on Purchase Price, Down Payment, Repayment time and Interest Rate
    const calculateRepaymentPerMonth = useMemo(() => {
        return Math.round(
            ((perchasePrice - downPayment) *
                ((interestRate * (1 + interestRate) ** repaymentTime) /
                    (1 + interestRate) ** (repaymentTime - 1))) /
                (repaymentTime * 12)
        )
    }, [perchasePrice, downPayment, repaymentTime, interestRate])

    return (
        <div className={styles.calculator}>
            <div className={styles.calculatorContent}>
                <div className={styles.left}>
                    <Link to="/" className={styles.backToHome}>
                        <RollbackOutlined />
                        <Typography>Back to home</Typography>
                    </Link>
                    <Typography className={styles.leftTitle}>
                        Mortgage Calculator
                    </Typography>
                    <Typography className={styles.leftSubTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                    </Typography>
                    <Row className={styles.leftTopSlider}>
                        <Col span={12}>
                            <Typography
                                className={styles.leftSliderText}
                            >{`Purchase Price: $${perchasePrice}`}</Typography>
                            <Slider
                                className={styles.leftSlider}
                                trackStyle={{
                                    backgroundColor: '#ff8049',
                                }}
                                handleStyle={{
                                    borderColor: '#ff8049',
                                }}
                                defaultValue={450000}
                                min={0}
                                max={1000000}
                                onChange={(value) => {
                                    setPurchasePrice(value)
                                }}
                            />
                        </Col>
                        <Col span={12}>
                            <Typography
                                className={styles.leftSliderText}
                            >{`Down Payment: $${downPayment}`}</Typography>
                            <Slider
                                className={styles.leftSlider}
                                trackStyle={{
                                    backgroundColor: '#ff8049',
                                }}
                                handleStyle={{
                                    borderColor: '#ff8049',
                                }}
                                defaultValue={135000}
                                min={0}
                                max={300000}
                                onChange={(value) => {
                                    setDownPayment(value)
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className={styles.leftTopSlider}>
                        <Col span={12}>
                            <Typography
                                className={styles.leftSliderText}
                            >{`Repayment time: ${repaymentTime} years`}</Typography>
                            <Slider
                                className={styles.leftSlider}
                                trackStyle={{
                                    backgroundColor: '#ff8049',
                                }}
                                handleStyle={{
                                    borderColor: '#ff8049',
                                }}
                                defaultValue={25}
                                min={0}
                                max={40}
                                onChange={(value) => {
                                    setRepaymentTime(value)
                                }}
                            />
                        </Col>
                        <Col span={12}>
                            <Typography
                                className={styles.leftSliderTextInterest}
                            >{`Interest Rate: ${interestRate}%`}</Typography>
                            <Slider
                                className={styles.leftSlider}
                                trackStyle={{
                                    backgroundColor: '#ff8049',
                                }}
                                handleStyle={{
                                    borderColor: '#ff8049',
                                }}
                                defaultValue={3}
                                min={0}
                                max={15}
                                onChange={(value) => {
                                    setInterestRate(value)
                                }}
                            />
                        </Col>
                    </Row>
                    <Typography>{`Loan amount: $${calculateLoanAmount}`}</Typography>
                    <Typography>
                        {`Estimated repayment per month: $${calculateRepaymentPerMonth}`}
                    </Typography>
                </div>
                <div className={styles.right}>
                    <Typography className={styles.rightTitle}>
                        Try our awesome Calculator
                    </Typography>
                    <Typography className={styles.rightSubTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                    </Typography>
                    <button className={styles.rightButton}>Register</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CalculatorPage
