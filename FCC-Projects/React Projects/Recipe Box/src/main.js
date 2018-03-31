import React , {Component} from 'react'
import {Paper, FlatButton, RaisedButton} from 'material-ui/'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


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
                    
                    <Card>
                    <CardHeader
                      title={data.Recipe}
                      actAsExpander={true}
                      showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                    {data.Ingredients.map((ingredients, i)=>{
                        return (<h3 key={i}>{ingredients}</h3>)
                    })}
                        
                    </CardText>
                    <CardActions>
                      <RaisedButton label="Edit" />
                      <RaisedButton label="Delete" />
                    </CardActions>
                    </Card>
                    
                    </div>)
            })}
            <br/>
            <RaisedButton label="Add" secondary={true} onClick={this.addRecipe} />
            </div>
            
        )
    }
}


export default App