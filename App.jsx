
import React from "react";
import {Row , Col, ListGroupItem} from 'reactstrap';
import Item from "./MakeItem/Item";
import TableView from "./TableView/TableView";
import ListView from "./ListView/ListView";
import shortid from 'shortid'
class App extends React.Component{

    state = {
        todos:[{
            id:'543545545',
            title:'Create Your Title',
            description:'Welcome to Tahsin  MAhi Application',
            Searchterm:' ',
        
        },
        {
            id:'45w5w54556',
            title:'Your Item Will look this',
            description:'Welcome to Tahsin  MAhi Application',
            Searchterm:' ',
          
        },
    ],
    isSelect:false
    
}

    toggleSelect = (todoId) => {
    this.setState({
     isSelect:!this.state.isSelect
        });       
      console.log(this.state.isSelect)
    }

    createTodo = (todo) => {
       todo.id = shortid.generate()
       todo.time = new Date()
       todo.isSelect = false;

       const todos = [todo,...this.state.todos]

       this.setState({todos})
    }

    render(){
        return(
            <div>
                <Row>
                    <Col md={12}>
                     <h3 style={{color:'#ef8f18' , textAlign: 'center' , fontSize:'50px' , marginTop:'60px'}}>Todo Application</h3>
                    </Col>
                    <Col className="my-5">
                    <Item createTodo={this.createTodo}/>
                    </Col>
                    <Col md={12}> 
                     <TableView isSelect={this.state.isSelect} todos={this.state.todos} toggleSelect={this.toggleSelect}/>
                    </Col>
                    <Col className="mt-5">
                      <ListView isSelect={this.state.isSelect} todos={this.state.todos} toggleSelect={this.toggleSelect}/>
                    </Col>
                </Row>
            </div>
        )
    }
}
//Next Part we Will fix the problem
export default App;