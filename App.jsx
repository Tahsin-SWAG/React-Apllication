import React from "react";
import  {Row , Col , Button , ListGroupItem , ListGroup} from 'reactstrap';
import Sidebar from "./Sidebar/sidebar";
import polls from "./data/polls";
import MainContent from './MainContent/MainContent'
import shortid from "shortid";
class App extends  React.Component{

  state = {
    polls:[],
    selectedPoll:{},
    searchTerm: '',
    users:[]
  }


  componentDidMount(){
    this.setState({
      polls:polls
    })
  }

  ok = (user) => {
    user.id = shortid.generate()
    this.setState({
      users:[...this.state.users , user]
    })
  }

  addnewPoll = (poll) => {
    poll.id = shortid.generate()
    poll.created = new Date()
    poll.vote = 0
    poll.opinion = []

    this.setState({polls:this.state.polls.concat(poll)})
  }

   delectPoll = pollId => {
    const polls = this.state.polls.filter(p =>p.id!== pollId)
     this.setState({polls, selectedPoll:{} })
   }

   selectPoll = pollId => {
     const poll = this.state.polls.find(p => p.id === pollId)
     this.setState({selectedPoll : poll})
   };

   getOpinion = (response) => {
    

   };

   handleSerch = (searchTerm) => {
     this.setState({
      searchTerm
     });
   };

   updatePoll = (updatePoll) => {
      const {polls} = this.state
     const poll = polls.find(p => p.id === updatePoll.id)
    
     poll.title = updatePoll.title
     poll.description = updatePoll.description
     poll.option = updatePoll.option

     this.setState({polls})
   }

   PerformSearch = () => {
    return (
         this.state.polls.filter(poll => 
          poll.title
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
        )
    )
  }

    render(){
      const polls = this.PerformSearch()
       return(
          <Row>
              <Col md={3}>
           <Sidebar addnewPoll={this.addnewPoll} polls={polls} selectPoll = {this.selectPoll} handleSerch={this.handleSerch}/>
              </Col>
              <Col md={8} className="mt-5 ms-4">
          <MainContent hello = {this.ok} poll={this.state.selectedPoll} delectPoll = {this.delectPoll} updatePoll = {this.updatePoll} getOpinion = {this.getOpinion}/>
          </Col>
          <Col md={6} className="ms-3">
              <ListGroup>
                <h5>About submit detais</h5>
                {this.state.users.map(user => (
                  <ListGroupItem key={user.id}>
                     <ul className="my-2 ms-5 " >
                       <li>
                          {'Thanks for using our Application' + ' ' + user.name + ' ---> ' + user.selectItem + ' ' + new Date().getHours()}
                       </li>
                     </ul>
                  </ListGroupItem>
                ))}
              </ListGroup>
          </Col>
         
          </Row>
        )
    }
};

export default App;