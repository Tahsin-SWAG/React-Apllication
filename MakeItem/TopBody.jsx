import React from "react";
import {Input , Label , Button} from 'reactstrap';

class Body extends React.Component{
    state = {
        title:" ",
        description:" ",
    }

    handleChange = (event) => {
           this.setState({
               [event.target.name]:event.target.value
           })
    }

    handleSubmit = () => {
          if(this.state.title == 0){
              alert("please give us a title")
        }else if(this.state.description == 0){
              alert("Please give us a description")
        }else {
            this.props.createTodo(this.state)
        }
    }

    //time to return the JSX
            
    render(){
        return(
            <div>
                <label className="my-2">Title</label>
                <Input placeholder="Title" name='title' onChange = {this.handleChange}/>
                 <label className="my-2">Description</label>
                 <Input placeholder="description" name="description" onChange={this.handleChange}/>
                 <Button color='success' onClick={this.handleSubmit} className="mt-3">
                      Create Item
                 </Button>
            </div>
        )
    }
}
export default Body;


//Today we will make a table view and list view