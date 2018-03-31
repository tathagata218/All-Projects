import React , {Component} from 'react'
import {Paper, FlatButton, RaisedButton} from 'material-ui/'

const recepiInfo =[
    {
    'id' : 1,
    'Recipe' : "Chicken Curry",
    "Ingredients" : ["Curry", "Chicken"]
    }
]

class App extends Component {
    state = {
        Recipe : null
    }
    
    componentWillMount () {
        
        if(window.localStorage){
            localStorage.clear()
            
        
            localStorage.setItem('Recipe',JSON.stringify(recepiInfo))
            this.setState({
                Recipe : recepiInfo
            })
        }

        console.log(this.state)
        
    }

    addRecipe = () =>{

    }

    deleteIngr = () =>{

    }

    render () {
        return (
            <div>
            {this.state.Recipe.map((data)=>{
                return(
                    <div>
                    {data}
                    
                    
                    </div>)
            })}
            <RaisedButton label="Add" secondary={true} onClick={this.addRecipe} />
            </div>
            
        )
    }
}


export default App