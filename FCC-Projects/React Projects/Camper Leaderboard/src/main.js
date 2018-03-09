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
        <h1>Camper Learderboard</h1>
        <Paper>
        <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Camper Name</TableHeaderColumn>
            <TableHeaderColumn>Points in Past 30 Days</TableHeaderColumn>
            <TableHeaderColumn>All Time Points</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn>Christopher Nolan</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
        </Paper>
        </div>
    )
}

}


export default App;

