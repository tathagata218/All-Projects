import React, {Component} from 'react'
import axios from 'axios'
import {Page, RaisedButton} from 'material-ui/'
import { Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from  'material-ui/Table'
class App extends Component {
    state = {

    }

    getInfo = ()=>{
        axios.get('')
    }


render() {

    return(
        <div>
        <Paper>
        </Paper>
        </div>
    )
}

}


export default App;

