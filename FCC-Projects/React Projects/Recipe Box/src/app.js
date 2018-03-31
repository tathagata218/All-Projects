import React from 'React'
import ReactDOM from 'react-dom'
import App from './main.js'
import './app.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
ReactDOM.render(<MuiThemeProvider><App/></MuiThemeProvider>,document.getElementById('root'));


if(module.hot) {
    module.hot.accept('./main', ()=>{
        const NextApp = require('./main').default
        ReactDOM.render(
            <NextApp/>,
            document.getElementById('root')
        )
    });
}
