import React, {Component} from 'react'
import axios from 'axios'
import {Page, RaisedButton} from 'material-ui/'
import { Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from  'material-ui/Table'
class App extends Component {
    state = {
        allTimePoints: [],
        past30days : []
    }

    componentWillMount () {
        this.getInfo()
    }

    getInfo()   {
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
        <h1>Camper Learderboard</h1>
        <Paper>
        <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Camper Name</TableHeaderColumn>
            <TableHeaderColumn><a onClick={this.sortPoints}>Points in Past 30 Days</a></TableHeaderColumn>
            <TableHeaderColumn><a onClick={this.sortPoints}>All Time Points</a></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        </Table>
        </Paper>
        </div>
    )
}

}


export default App;

