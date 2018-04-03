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
        editOpen : false

    }
    
    componentWillMount () {
        console.log(localStorage.getItem('Recipe'))
        const data = localStorage.getItem('Recipe')
        console.log(data)
        const check = JSON.parse(data)
        console.log(check)
        if( !localStorage.getItem('Recipe') || data || check.length === 1){
            
            localStorage.clear()
            
            localStorage.setItem('Recipe',JSON.stringify(recepiInfo))
            const getData =  localStorage.getItem('Recipe');
            this.setState({
                Recipe : JSON.parse(getData)
            })
                     
        
          console.log('in the if statements')  
        
        
    }
    else if(data && check.length > 1) {
        localStorage.clear()
        localStorage.setItem('Recipe',JSON.stringify(recepiInfo))
        const getData =  localStorage.getItem('Recipe');
            this.setState({
                Recipe : JSON.parse(getData)
            })
        console.log('in the else statemets')    
    }

        console.log('componentWill mount is hit');

    }


    handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
        
      };

      handleEditOpen = () => {
        this.setState({editOpen: true});
      };
    
      handleEditClose = () => {
        this.setState({editOpen: false});
      };

      handleSubmitClose = () => {
        this.setState({open: false});
        
        if(this.state.NewRecipe && this.state.NewIngredients){
            const arr = this.state.NewIngredients.match(/[a-zA-Z]+/gi)
            const newData = {Recipe : this.state.NewRecipe, Ingredients : arr}
            this.state.Recipe.push(newData);
            localStorage.setItem('Recipe',JSON.stringify(this.state.Recipe));
            const setNewData =  localStorage.getItem('Recipe');
            this.setState({
                Recipe: JSON.parse(setNewData)
            })
            
           

        }
        this.render()
      }

  
      setItem = (e)=> {
          const {name, value} = e.target
          this.setState({
              [name] : value
          })
          
      }

      editItem = (e)=>{
          const {name, value} = e.target
          this.setState({
              [name] : value
          })
      }

      editIngrediants (id) {
        let recipe = localStorage.getItem('Recipe')
        let arr = JSON.parse(recipe)
        console.log(this)
        console.log(id)
        this.setState({editOpen: true});
    }

      deleteIngrediants (id) {
        let recipe = localStorage.getItem('Recipe')
        let arr = JSON.parse(recipe)
        if(arr.length > 1){
        arr.splice(id, 1);
        this.setState({
            Recipe : arr
        })
        localStorage.setItem('Recipe',JSON.stringify(arr))
        this.render()
        }
        else{
            alert('This is the only Recipe')
        }
         
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
          const editActions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleEditClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              disabled={false}
              onClick={this.handleEditClose}
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
                    {data.Ingredients.map((ingredients, k)=>{
                        return (<h3 key={k}>{ingredients}</h3>)
                    })}
                        
                    </CardText>
                    <CardActions>
                      <RaisedButton card={i} onClick={ ()=>{this.editIngrediants(i)}} label="Edit" />
                      <RaisedButton card={i} onClick={ ()=>{this.deleteIngrediants(i)}}  label="Delete" />
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
                  name="editIngredients"
                  floatingLabelText="Ingredients"
                  onChange={this.setItem}
                />
        </Dialog>

        <Dialog
                title="Edit Ingridients"
                actions={editActions}
                modal={true}
                open={this.state.editOpen}
                onRequestClose={this.handleEditClose}
                    >
                   
                  <TextField
                  hintText="New Ingredients"
                  name="NewIngredients"
                  floatingLabelText="Ingredients"
                  onChange={this.editItem}
                />
        </Dialog>



            </div>
            
        )
    }
}


export default App