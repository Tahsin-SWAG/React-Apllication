import React from "react";
import ParticipaTion from "./Participation";
import {Modal , ModalBody , ModalHeader } from 'reactstrap';
import Tahisn from "../Modalfile/Tahsin";
class MainContent extends React.Component{

    state = {
        isOpen : false
    }

    toggleModal = () => {
       this.setState({
           isOpen : !this.state.isOpen
       })
    }

    render(){
         
        if(Object.keys(this.props.poll).length === 0){
            return (
                <div>
                    <h3>Welcoem to my Application</h3>
                    <p>Tahsin Islam Mahi Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, beatae? Fuga cum, nobis minus iusto dolor nihil a nemo labore hic autem distinctio quia harum odit eum adipisci ad culpa!</p>
                </div>
            )
        }
        
        return (
            <div>
            <h3>{this.props.poll.title}</h3>
          <p>{this.props.poll.description}</p>
          <ParticipaTion  hello={this.props.hello} poll={this.props.poll} delectPoll={this.props.delectPoll} toggleModal={this.toggleModal} getOpinion = {this.props.getOpinion}/>
        <Modal isOpen={this.state.isOpen} toggle={this.toggleModal} unmountOnClose={true}>
           <ModalHeader toggle={this.toggleModal}>
                 Update Poll 
           </ModalHeader>
           <ModalBody>
             <Tahisn poll={this.props.poll} delectPoll={this.props.delectPoll} submit={this.props.updatePoll} isUpdate = {true}/>
           </ModalBody>
        </Modal>
        </div>
        )
    }
}
export default MainContent;