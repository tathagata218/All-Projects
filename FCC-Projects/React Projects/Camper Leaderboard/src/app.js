import React from 'react'
import ReactDOM from 'react-dom'
import App from './main.js'
import './app.css'

ReactDOM.render(<App/>,document.getElementById('root'));



if(module.hot) {
    module.hot.accept('./main', ()=>{
        const NextApp = require('./main').default
        ReactDOM.render(
            <NextApp/>,
            document.getElementById('root')
        )
    });
}
