import React, {Component} from 'react'
import axios from 'axios'
import {Paper, RaisedButton} from 'material-ui/'
import { Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from  'material-ui/Table'
class App extends Component {
    state = {
        allTimePoints: [],
        past30days : [],
        render: false
    }

    componentWillMount () {
        //this.getInfo()
    }

    getInfo()   {
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then((data)=>{
            this.setState({
                fccLeaderboardData : data.data,
                render : true
            })
            this.render()

        }).catch((err)=>{
            console.log(err);
        })
    }


render() {
    
    if(this.state.render){

        return(
    
            <div>
            <h1>Camper Learderboard</h1>
            
            </div>
        )
    }

    else{
        this.state.fccLeaderboardData.map((data)=>{
            return(
                <div>
                <h1>Campers Leaderboard</h1>
                <Paper>
                </Paper>
                </div>
            )
        })
    }
    
}

}


export default App;

