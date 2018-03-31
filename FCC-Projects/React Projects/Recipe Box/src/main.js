import React , {Component} from 'react'
import {Paper, FlatButton, RaisedButton} from 'material-ui/'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


const recepiInfo =[
    {
    'id' : 1,
    'Recipe' : "Chicken Curry",
    "Ingredients" : ["Curry", "Chicken"]
    }
]

class App extends Component {
    state = {
        Recipe : null,
        open: false,
        newRecipe : '',
        newIngrediants :''
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


    handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };

  
      setItem = (e)=> {
          console.log(e.target)

      }
 
    render () {
        const actions = [
            <FlatButton
              label="Cancel"
              primary={false}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              onClick={this.handleClose}
            />,
          ];
        return (
            <div>
            <h1 style={{"textAlign":"center"}}>Recipe Box</h1>
            {this.state.Recipe.map((data,i)=>{
                
                return(
                    <div key={i}>
                    
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
                      <RaisedButton onClick={ ()=>{console.log(this)} } label="Edit" />
                      <RaisedButton onClick={ ()=>{console.log(this)} }  label="Delete" />
                    </CardActions>
                    </Card>
                    
                    </div>)
            })}
            <br/>
            <RaisedButton label="Add" secondary={true} onClick={this.handleOpen} />

        <Dialog
                title="Add New Recipe"
                actions={actions}
                modal={true}
                open={this.state.open}
                onRequestClose={this.handleClose}
                    >
                    <TextField
                    hintText="New Recipe "
                    name="NewRecipe"
                    floatingLabelText="Recipe"
                    onChange={this.setItem}
                    /><br />
                  <TextField
                  hintText="New Ingredients"
                  name="NewIngredients"
                  floatingLabelText="Ingredients"
                  onChange={this.setItem}
                />
        </Dialog>
            </div>
            
        )
    }
}


export default App