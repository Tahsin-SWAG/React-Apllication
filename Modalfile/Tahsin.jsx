import React from "react";
import { Form  , FormGroup , Button , Input} from "reactstrap";
import shortid from "shortid";

const defaultOption = [
    {  id:shortid.generate() , value : ' ' , vote : 0  },
    {  id:shortid.generate() , value : ' ' , vote : 0  }

]

class Tahisn extends React.Component{
    state = {
        title: ' ',
        description:' ',
        options:defaultOption
    }


    componentDidMount(){
        const {poll} = this.props
        if(poll && Object.keys(poll).length > 0){
            this.setState({
                poll: poll.title,
                description: poll.description ,
                options: poll.options
            })
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleOptionChange = (event , index) => {
        const {options} = this.state
        options[index].value = event.target.value
        this.setState({options})
    }
 
    createOption = () => {
        const {options} =this.state
        if(options.length < 5){
            options.push({
                id:shortid.generate(),
                value : ' ' , 
                vote : 0 
            })
            this.setState({options})
        }else{
            alert('You cannnot create option anymore')
        }
    }

    deleteOptaion = (index) => {
      const {options} = this.state
         options.splice(index , 1)
         this.setState({options})
    }

    handleSubmit = (event) => {
        if(this.state.title.length == 0){
            alert('PL')
        }else if(this.state.description.length == 0){
            alert('sd')
        }else {
            const {title , description , options } = this.state
            const poll = {
                 title,
                 description,
                 options
            }
            if(this.props.isUpdate){
                poll.id = this.props.poll.id
                this.props.submit(poll)
                alert('Updated Successfully')
            }else{
                this.props.submit(poll)
            }
        }
    }


    render(){
        return (
            <Form>
              <FormGroup className="my-2">
                  <label>Title</label>
                 <Input className="my-2" placeholder="Enter your name" onChange={this.handleChange} name ='title'/>
                 <label>Descriptiption</label>
                 <Input className="my-2" placeholder="Enter your Description" onChange={this.handleChange} name ='description'/>
              </FormGroup>
              <Button onClick = {this.createOption} color="success"className="my-2" > Add Option</Button>
             <hr></hr>
             <FormGroup>
                {this.state.options.map((opt , index) => (
                    <div key={opt.id} className="my-2 d-flex">
                        <Input placeholder="Option A" onChange={(e)=>this.handleOptionChange(e , index)}/>
                        <Button color='danger' onClick={this.deleteOptaion} disabled={this.state.options.length < 3 ? true : false}>Delect</Button>
                    </div>
                ))}
              </FormGroup>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
        )
    }
}
export default Tahisn;    
