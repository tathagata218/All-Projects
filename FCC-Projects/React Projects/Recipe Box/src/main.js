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
        if(window.localStorage){
            localStorage.clear()
            }
        else (
            localStorage.setItem('Recipe',recepiInfo)

        )
    }

    addRecipe = () =>{

    }

    deleteIngr = () =>{

    }

    render () {
        return (
            <div>
            <h1>This is the recipe Box</h1>
            <RaisedButton label="Secondary" secondary={true} onClick={this.addRecipe} />
            </div>
            
        )
    }
}


export default App