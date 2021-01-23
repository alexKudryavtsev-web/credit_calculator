function calcAnnuityPay(sum, percent, mounth) {
    let r = +(percent / 100 / 12).toFixed(4)
    let a = r * Math.pow(1 + r, mounth)
    let b = Math.pow(1 + r, mounth) - 1
    return Math.ceil((sum * a) / b)
}

function calcOverPayment(sum, annuityPay, mounth) {
    return annuityPay * mounth - sum
}

function calcDiffPay(sum, percent, mounth) {
    let mainPay = sum / mounth
    let body = sum
    let res = []
    for (let i = 0; i < mounth; i++) {
        let percentPay = Math.round(body * (percent/100) * 30 / 365)
        res.push(Math.round(mainPay + percentPay))
        body -= mainPay
    }
    return res
}

function calcOverDiffPay(sum, pays) {
    let sumPay = pays.reduce((sum, cr) => sum + cr)
    return sumPay - sum
}

export {
    calcAnnuityPay,
    calcDiffPay,
    calcOverPayment,
    calcOverDiffPay
}