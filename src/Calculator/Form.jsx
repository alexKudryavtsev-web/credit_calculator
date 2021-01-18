import { Switch, Form, Input, Button } from 'antd'
import { PercentageOutlined, CalendarOutlined, DollarOutlined, CalculatorOutlined } from '@ant-design/icons'
import { isRequired, isMoreThen1, isPercent } from './validate'
import { initialValues } from './initial'
import { layout, tailLayout } from './layout'

function FormComponent({ submitHandler }) {
    return <Form {...layout} initialValues={initialValues} onFinish={submitHandler}>
        <Form.Item label='Аннуитет/Дифференциал:' name='type'>
            <Switch />
        </Form.Item>
        <Form.Item label='Сумма кредита:' name='sum' rules={[isRequired, isMoreThen1]}>
            <Input placeholder='введите сумму' type='number' min={1} prefix={<DollarOutlined />} />
        </Form.Item>
        <Form.Item label='Процентная ставка:' name='percent' rules={[isRequired, isPercent]}>
            <Input placeholder='введите процент' type='number' min={1} max={100} prefix={<PercentageOutlined />} />
        </Form.Item>
        <Form.Item label='Количество платежей:' name='mounth' rules={[isRequired, isMoreThen1]}>
            <Input placeholder='введите количество месяцев' type='number' min={1} prefix={<CalendarOutlined />} />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button htmlType='submit' onClick={() => console.log('press')} type='primary' danger icon={<CalculatorOutlined />}>сосчитать</Button>
        </Form.Item>
    </Form>
}

export default FormComponent