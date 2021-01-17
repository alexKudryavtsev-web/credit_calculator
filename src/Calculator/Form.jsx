import { Switch, Form, Input, Button } from 'antd'
import { PercentageOutlined, CalendarOutlined, DollarOutlined, CalculatorOutlined } from '@ant-design/icons'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    }
}

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    }
}

const rules = [
    { require: true }
]

function FormComponent() {
    return <Form {...layout}>
        <Form.Item label='Аннуитет/Дифференциал:'>
            <Switch />
        </Form.Item>
        <Form.Item label='Сумма кредита:' rules={rules}>
            <Input placeholder='введите сумму' type='number' min={1} prefix={<DollarOutlined />} />
        </Form.Item>
        <Form.Item label='Процентная ставка:' rules={rules}>
            <Input placeholder='введите процент' type='number' min={1} max={100} prefix={<PercentageOutlined />} />
        </Form.Item>
        <Form.Item label='Количество платежей:' rules={rules}>
            <Input placeholder='введите количество месяцев' type='number' min={1} prefix={<CalendarOutlined />} />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button type='primary' danger icon={<CalculatorOutlined />}>сосчитать</Button>
        </Form.Item>
    </Form>
}

export default FormComponent