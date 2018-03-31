import React , {Component} from 'react'


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
            </div>
        )
    }
}


export default App