import './style.css'
import Form from './Form'
import handleForm from './handler'

function Calculator() {
    return <main className='App'>
        <a className='Header' href='https://github.com/'>Калькулятор кредита</a>
        <Form submitHandler={handleForm} />
    </main>
}

export default Calculator