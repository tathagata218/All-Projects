import React, {Component} from 'react'
import axios from 'axios'
import {Paper, FlatButton, RaisedButton} from 'material-ui/'
import './main.css'




class App extends Component {
    state = {
        allTimePoints: [],
        past30days : [],
        fccLeaderboardData : [],
        sortedArr : []
    }

    componentWillMount () {
        
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then((data)=>{
            this.setState({
                fccLeaderboardData : data.data,
                
            })
            console.log(this.state)
            

        }).catch((err)=>{
            console.log(err);
        })
    }

    sort ()  {
        let arr = this.state.fccLeaderboardData;
        let arrLength = arr.length;
        let resultArr = arr;
        let check;
        console.log("you are in the sort function")
        do {
        check = false;
        
        for(let i=0; i<arrLength-1; i++){
        
            if(arr[i].recent > arr[i+1].recent){
                let firstNum = resultArr[i];
                let secondNum = resultArr[i+1];
        // In this condition you have make variable defineing one number in a position
              resultArr[i+1]=firstNum;
              resultArr[i]=secondNum;
              check = true;
            }
      
        }
        }
        while(check);

        this.setState({
            fccLeaderboardData : resultArr
        })
        console.log("This is after the fccLeaderboarddata")
        this.render();
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
                    <th > <FlatButton onClick={ this.sort} label="Points in Past 30 Days" primary={true} /></th>
                    <th ><FlatButton onClick={ this.sort} label="All time points" primary={true} /> </th>
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

