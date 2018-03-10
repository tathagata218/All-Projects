import React, {Component} from 'react'
import axios from 'axios'
import {Paper, FlatButton, RaisedButton} from 'material-ui/'
import './main.css'
//import { Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from  'material-ui/Table'



class App extends Component {
    state = {
        allTimePoints: [],
        past30days : [],
        render: false,
        fccLeaderboardData : []
    }

    componentWillMount () {
        
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then((data)=>{
            this.setState({
                fccLeaderboardData : data.data,
                render : true
            })
            console.log(this.state)
            

        }).catch((err)=>{
            console.log(err);
        })
    }

    sort = ()=>{
        console.log('This will be the sort function');
    }


render() {
    return (
        <div>
        <h1 id="heading">Leaderboard Information</h1>
        <div id='div1'>
        <table id="ListTable">
                    <tr>
                    <th>#</th>
                    <th>Camper Name</th> 
                    <th > <FlatButton onClick={this.sort} label="Points in Past 30 Days" primary={true} /></th>
                    <th ><FlatButton onClick={this.sort} label="All time points" primary={true} /> </th>
                  </tr>
                 
                    
        {this.state.fccLeaderboardData.map((data,index)=>{
            return(<tr>
                        <td>{index}</td>
                        <td>{data.username}</td>
                        <td>{data.recent}</td>
                        <td>{data.alltime}</td>

                    
                    </tr>
                    
                
                    )
            
        })}
        </table>
        </div>
        </div>
        
    )
    
}





    
    
    


}


export default App;

