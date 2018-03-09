import React, {Component} from 'react'
import axios from 'axios'
import {Page, RaisedButton} from 'material-ui/'
import { Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from  'material-ui/Table'
class App extends Component {
    state = {

    }

    getInfo = ()=>{
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then((data)=>{
            this.setState({
                fccLeaderboardData : data
            })
        }).catch((err)=>{
            console.log(err);
        })
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

