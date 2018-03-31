import React , {Component} from 'react'
import {Paper, FlatButton, RaisedButton} from 'material-ui/'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


const recepiInfo =[
    {
    'Recipe' : "Chicken Curry",
    "Ingredients" : ["Curry", "Chicken"]
    }
]

class App extends Component {
    state = {
        Recipe : null,
        open: false,

    }
    
    componentWillMount () {
        const data = localStorage.getItem('Recipe')
        const check = JSON.parse(data)
        if(check.length == 1){
        if(window.localStorage){
                     
        
            
            const getData =  localStorage.getItem('Recipe');
            this.setState({
                Recipe : JSON.parse(getData)
            })
            
        }
    }
    else {
        localStorage.clear()
        localStorage.setItem('Recipe',JSON.stringify(recepiInfo))
    }
    }


    handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
        
      };

      handleSubmitClose = () => {
        this.setState({open: false});
        
        if(this.state.NewRecipe && this.state.NewIngredients){
            const arr = this.state.NewIngredients.match(/[a-zA-Z]+/gi)
            const newData = {Recipe : this.state.NewRecipe, Ingredients : arr}
            const finalData = this.state.Recipe.push(newData);
            localStorage.setItem('Recipe',JSON.stringify(finalData));
            console.log(finalData)
            this.setState({
                Recipe: finalData
            })
            console.log(this.state)
           

        }
        this.render()
      }

  
      setItem = (e)=> {
          const {name, value} = e.target
          this.setState({
              [name] : value
          })
          
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
              onClick={this.handleSubmitClose}
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
                      titleStyle={{"fontSize":"25px"}}
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