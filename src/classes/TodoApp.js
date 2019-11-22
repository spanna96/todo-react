import React from 'react';
import TodoList from './TodoList' ;

function randomColorNumb(min, max) {
  return Math.random() * (max - min) + min; //cделать округление до целого
};
let items = [];

class TodoApp extends React.Component {
  state = {
    items: [],
    text: '',
    color: '',
  };
  
  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text: text });//берется значение из главного поля
  }

  addItem = () => {
    let c = Math.round(randomColorNumb(1, 5));

    const { items, text, color, checked } = this.state;
    const newItem = {
      key: items.length + 1,
      text,
      color: "Color"+c ,
      checked: false
    };
    if (text.trim()) {
      this.setState({
        items: items.concat(newItem),
        text: '',
        color: newItem.color,
        checked: false
      });
    }
  
  }

  
    changeColor = (color) => {
      const editedItem = {
        key: this.state.key,
        text: this.state.text,
        color: color,
        checked: false
      };
      this.handleEdit(editedItem);
    }    

  keyPressed = (event) => {
    if (event.key === "Enter") {
      if (this.state.text.trim()) {
        this.addItem()
      }

    }
  }

  handleEdit = (thisItem) => {
    this.setState({
      items: this.state.items.map((e) => { //создается новый массив
        if (e.key == thisItem.key) {
          e.text = thisItem.text;
          e.color = thisItem.color;  
          e.checked = thisItem.checked
        }
        return e;
      }),
      text: '',
      color: '',
      checked: false
    });
  }

  handleDelete = (thisItem) => {
    this.setState({
      items: this.state.items.filter((e) => e.key !== thisItem.key),
      text: ''
    });
  }

  

  render() {
    return (
      <div id="toStart">
        <div>
          <h3>TODO</h3>
          <input id="inputField" type="text"
            value={this.state.text}
            onChange={this.handleChange}
            onKeyPress={this.keyPressed}
          />
          <button id="btnAdd" onClick={this.addItem}>
            Add
          </button>
        </div>
        <div>
          <button id="btnCol1"
          onClick={this.changeColor ("Color1")}
          >
            color 1
          </button>
          <button id="btnCol2">
            color 2
          </button>

          <TodoList
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            items={this.state.items}

          />
        </div>
      </div>
    );
  }
  
}

export default TodoApp