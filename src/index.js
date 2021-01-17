import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css'
import './globalStyle.css'
import Calculator from './Calculator/Calculator'

ReactDOM.render(
  <Calculator/>,
  document.getElementById('root')
)

reportWebVitals()