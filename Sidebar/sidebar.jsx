import React from "react";
import {Input , Button} from 'reactstrap';
import PollList from "./list";
import {Modal , ModalBody , ModalHeader } from 'reactstrap';
import Tahisn from "../Modalfile/Tahsin";
class Sidebar extends React.Component{

    state = {
        isOpen : false
    }

    OpenModal = () => {
       this.setState({
           isOpen:!this.state.isOpen
       })
    }

    render(){
        return (
            <div style={{background:'#dfd6d6' , marginTop:'50px' , marginLeft:'20px' , borderRadius:'5px'}}>
                <div style={{padding : '20px'}}>
                    <Input placeholder="Search here"/>
                    <Button color='success' className="float-end" onClick={this.OpenModal}> New </Button>
                    <h3 className="mt-2">All New Polls</h3>
                    <hr className="mt-1"></hr>
                   <PollList polls={this.props.polls} selectPoll = {this.props.selectPoll}/> 
                    </div>
                     <Modal isOpen={this.state.isOpen} toggle={this.OpenModal} unmountOnClose={true}>
                    <ModalHeader toggle={this.OpenModal}>
                         NEW POLLS
                    </ModalHeader>
                    <ModalBody>
                        <Tahisn submit={this.props.addnewPoll}/>
                    </ModalBody>
                </Modal>               
            </div>
        )
    }
}

export default Sidebar;
