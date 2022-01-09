import React from "react";
import { Table , CustomInput , Button} from "reactstrap";

class ListView extends React.Component{
    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>
                            #!
                        </th>
                        <th>
                          Title
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                         Action
                        </th>
                    </tr>
                </thead>
              {this.props.todos.map(todo =>(
                  <tbody>
                      <tr>
                          <th>
                              <CustomInput
                              type="checkbox"
                              onClick={this.props.toggleSelect}
                              />
                          </th>
                          <th>
                              {todo.title}
                          </th>
                          <th>
                              {new Date().toString()}
                          </th>
                          <th>
                              <Button color = {this.props.isSelect === false ? 'success' : 'danger'}>
                                  {this.props.isSelect === false ? "Complete" : 'Prosseing'}
                                  </Button>
                          </th>
                      </tr>
                  </tbody>
              ))}
            </Table>
        )
    }
}
export default ListView;