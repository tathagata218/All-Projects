import React , {Component} from 'react'
import {Paper, FlatButton, RaisedButton} from 'material-ui/'

recepiInfo =[
    {
    'Recipe' : "Chicken Curry",
    "Ingredients" : ["Curry", "Chicken"]
    }
]

class App extends Component {
    state = {

    }
    
    componentWillMount () {
        console.log(this)
        if(window.localStorage){
            localStorage.clear()
            }
        else {
            localStorage.setItem('Recipe',recepiInfo)
            this.setState({
                Recipe : recepiInfo
            })
        }


        
    }

    addRecipe = () =>{

    }

    deleteIngr = () =>{

    }

    render () {
        return (
            <div>
            {this.state.Recipe.map(()=>{
                return(
                    <div>
                    
                    
                    
                    </div>)
            })}
            <RaisedButton label="Add" secondary={true} onClick={this.addRecipe} />
            </div>
            
        )
    }
}


export default App