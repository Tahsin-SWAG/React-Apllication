import React from "react";
import { Input , Button , Modal , ModalBody , ModalHeader} from "reactstrap";
import Body from "./TopBody";
class Item extends React.Component{

    state = {
        isOpen:false
    }

    toggleModal = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render(){
        return(
            <div>
                <div className="d-flex"> 
                <Input placeholder="Search Item"/>
                <Button color="success" onClick={this.toggleModal}>
                    New
                </Button>
            </div>
            <Modal toggle={this.toggleModal} isOpen={this.state.isOpen}  unmountOnClose={true}>
               <ModalHeader toggle={this.toggleModal}>
                   New Item
               </ModalHeader>
               <ModalBody>
                   <Body createTodo = {this.props.createTodo}/>
               </ModalBody>
            </Modal>
            </div>
        )
    }
}
//We Will Make The Body Now ......HAPPY PROGGRAMIMG
export default Item;