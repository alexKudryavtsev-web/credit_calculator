import './style.css'
import Form from './Form'

function Calculator() {
    return <main className='App'>
        <a className='Header' href='https://github.com/'>Калькулятор кредита</a>
        <Form submitHandler={body => console.log(body)}/>
    </main>
}

export default Calculator