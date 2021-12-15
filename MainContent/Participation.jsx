import React from "react";
import {Form , FormGroup , CustomInput , Label , Button , Input} from 'reactstrap';

class ParticipaTion extends React.Component{
    state = {
        name : ' ',
        selectItem : ' '
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    } 

    handleSubmit = () => {
          const {name , selectItem} = this.state
    if(name == 0){
       alert('Please enter your name')
    }else if(selectItem == 0){
        alert('Please select a option')
    }else {
       this.props.getOpinion({
           id : this.props.poll.id,
           name : this.state.name,
           selectItem : this.state.selectItem
       })
       this.props.hello(this.state)
    }
  }

  render(){
      return (
          <Form>
                  <div>
                      <Button
                      color="success"
                      onClick={this.props.toggleModal}
                      className="float-left"
                      >
                        Edit
                      </Button>
                      <Button 
                      color='danger'
                      className="float-end"
                      onClick={()=>this.props.delectPoll(this.props.poll.id)}
                      >
                          Delect
                      </Button>
                  </div>           
                  {
                  this.props.poll.options.map(opt => (
                   <Label>
                    <FormGroup className="my-2 d-flex" key={opt.id}>
                       <CustomInput
                       type="radio"
                        name='selectItem'
                        id={opt.id}
                        value={opt.value}
                        onChange={this.handleChange}
                       />
                       <span
                       style={{background : '#6c757d' , color:'white' , padding : ' 5px' , borderRadius:'3px', float:'left'}} className="ml-auto"
                       >
                        {opt.value}
                       </span>
                       <span
                       style={{background : '#0d6efd' , color:'white' , padding : ' 5px' , borderRadius:'3px' , float:'right'}} className="ms-2"
                       >
                        {opt.vote}
                       </span>
                    </FormGroup>
                   </Label> 
                ))}
                  <FormGroup>  
                  <label>What's your name?</label>
                  <Input name = 'name' onChange={this.handleChange} placeholder="Enter your name"/>
                 <Button color='primary mt-2' onClick={this.handleSubmit}>SUBMIT</Button>
                  </FormGroup>
          </Form>
      )
  }
}

export default ParticipaTion;