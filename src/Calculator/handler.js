import React from 'react'
import { Modal } from 'antd'
import { calcAnnuityPay, calcDiffPay, calcOverPayment, calcOverDiffPay } from './calculate'

function creatediff(sum, percent, mounth) {
    let pays = calcDiffPay(sum, percent, mounth)
    let overPay = calcOverDiffPay(sum, pays)
    return <>
        {pays.map((value, index) =>
            <p key={value}><strong>платеж {index + 1}: </strong>{value}</p>
        )}
        <p><strong>переплата: </strong>{overPay}</p>
    </>
}

function createAnnuity(sum, percent, mounth) {
    let pay = calcAnnuityPay(sum, percent, mounth)
    let overPay = calcOverPayment(sum, pay, mounth)
    return <>
        <p><strong>платеж: </strong>{pay}</p>
        <p><strong>переплата: </strong>{overPay}</p>
    </>
}

function validate(body) {
    return {
        type: body.type,
        sum: +body.sum,
        percent: +body.percent,
        mounth: +body.mounth
    }
}

function handleForm(body) {
    let { type, sum, percent, mounth } = validate(body)

    Modal.info({
        title: 'Данные о кредите',
        content: type
            ? creatediff(sum, percent, mounth)
            : createAnnuity(sum, percent, mounth)
    })
}

export default handleForm