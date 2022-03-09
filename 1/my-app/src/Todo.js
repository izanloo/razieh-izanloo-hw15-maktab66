import React from "react";
import ReactDOM from "react-dom";
import { Button, Form } from 'react-bootstrap';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';

export default class Todoform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      currentTask: {
        text: "",
        key: ""
      }
    };
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.nameInput).focus();
  }
  componentDidUpdate() {
    ReactDOM.findDOMNode(this.nameInput).focus();
  }

  addTask = (event) => {
    event.preventDefault();
    const newItem = this.state.currentTask;
    if (newItem.text !== "") {
      const items = [...this.state.task, newItem];
      this.setState({
        task: items,
        currentTask: {
          text: "",
          key: ""
        }
      });
    }
  }

  editTask = (text, key) => {
    const items = this.state.task;
    this.setState({
      task: items.filter(item => item.key !== key),
      currentTask: {
        text
      }
    });
  }

  deleteTask = (key) => {
    const currentTaskArray = [...this.state.task];
    const taskAfterDeleted = currentTaskArray.filter(
      deletedTask => deletedTask.key !== key
    );
    this.setState({
      task: taskAfterDeleted
    });
  }

  handleInput = (event) => {
    this.setState({
      currentTask: {
        text: event.target.value,
        key: Math.random()
          .toString(36)
      }
    });
  }

  render() {
    return (
      <div className="Todo mt-5 text-center d-flex justify-content-center">
        <div >
          <div className="col-12">
            <Form id="todo-list" onSubmit={this.addTask}>
              <Form.Group className="mx-md-5 px-md-5">
                <div>
                  <input
                    type="text"
                    className="textInput"
                    placeholder="Enter Item"
                    value={this.state.currentTask.text}
                    onChange={this.handleInput} ref={(ref) => this.nameInput = ref}/>
                  <Button type="submit" className="mx-2 add">Add</Button>
                </div>
              </Form.Group>
            </Form>
            
            <div className="mt-3 rounded showcomponent text-end">
              <Todolist task={this.state.task} deleteTask={this.deleteTask} editTask={this.editTask} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Todolist extends React.Component {
  render() {
    return (
      <div>
        {this.props.task.map(oneTask => (
          <div key={oneTask.key} >
            <div className="container">
              <div className="p-1">
                {oneTask.text}
                <div className="d-inline">
                  <a rol="button"
                    className="w3-button delete"
                    onClick={() => this.props.deleteTask(oneTask.key)}>
                    <AiTwotoneDelete />
                  </a>
                  <a rol="button"
                    className="w3-button edit"
                    onClick={() => this.props.editTask(oneTask.text, oneTask.key)}>
                    <AiFillEdit />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
