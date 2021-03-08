const isRequired = {
    required: true,
    message: 'значение должно быть введено'
}

const isMoreThen1 = {
    type: 'number',
    min: 1,
    message: 'значение должно быть больше 1',
    transform: v => Number(v)
}

const isPercent = {
    type: 'number',
    min: 0.1,
    max: 100,
    message: 'значение должно быть в 0,1...100%',
    transform: v => Number(v)
}

export { isRequired, isMoreThen1, isPercent }