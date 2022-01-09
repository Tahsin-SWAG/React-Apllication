import React from "react";
import {ListGroup ,  Button , ListGroupItem, CustomInput} from "reactstrap";

class TableView extends React.Component{
    render(){
        return(
            <div>
            <ListGroup>
                 {this.props.todos.map(todo => (
                     <ListGroupItem
                     key={todo.id}
                    >
                        <CustomInput
                        type="checkbox"
                        onClick={this.props.toggleSelect}
                        />
                        <h3 className="ms-4">{todo.title}</h3>
                        <p className="ms-4">{new Date().toString()}</p>
                        <Button className="float-end" color={this.props.isSelect === false ? 'success' : 'danger'} onClick={this.props.toggleSelect}>
                            {this.props.isSelect === false ? 'Complete' : 'Prossecing'}
                        </Button>
                    </ListGroupItem>
                 ))}
            </ListGroup>
        </div>
        )
    }
}
export default TableView;