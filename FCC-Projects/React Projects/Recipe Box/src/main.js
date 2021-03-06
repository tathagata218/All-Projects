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
        editOpen : false,
        indexRecipe:null,
        editIngredients: null

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
                     
        
         
        
        
    }
    else if(data && check.length > 1) {
        localStorage.clear()
        localStorage.setItem('Recipe',JSON.stringify(recepiInfo))
        const getData =  localStorage.getItem('Recipe');
            this.setState({
                Recipe : JSON.parse(getData)
            })
        
    }

       
    }


    handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
        
      };

        
      handleEditClose = () => {
        this.setState({editOpen: false});
      };

      handleSubmitClose = () => {
          console.log ('it woks')
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
        console.log(this.state)  
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

      editIngrediants = (id)=> {
        
        this.setState({
            editOpen: true,
            indexRecipe: id        
        });
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
      
      editFinal = () => {
          this.setState({
            editOpen : false
          })
          if(this.state.editIngredients){
            let index = this.state.indexRecipe
            const data1 = localStorage.getItem('Recipe')
            console.log(data1);
            const data2 = JSON.parse(data1)
            console.log(data2);
            const newArr = this.state.editIngredients.match(/[a-zA-Z]+/gi)
            data2[index].Ingredients = newArr;

            this.setState({
                Recipe : data2
               

            })
            localStorage.setItem('Recipe',JSON.stringify(data2))
            console.log(this.state)
            this.render()

            }
            else{
                console.log('it works')
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
              onClick={this.editFinal}
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
                  name="NewIngredients"
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
                  name="editIngredients" 
                  floatingLabelText="Ingredients"
                  onChange={this.editItem}
                />
        </Dialog>



            </div>
            
        )
    }
}


export default App