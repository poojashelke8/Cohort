/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(data) {
    this.todos.push(data);
  }

  remove(indexof) {
    if (indexof >= 0 && indexof <= this.todos.length) {
      this.todos.splice(indexof, 1);
    }
    else {
      throw new Error("error")
    }
  }

  update(index, data) {
    // if (index < this.todos.length) {
      if (index >= 0 && index < this.todos.length) {
      this.todos[index] = data;
    } else {
      throw new Error('Error');
    }
  }

  getAll() {
    return this.todos
  }

  // get(index){
  //   return this.todos[index]
  // }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      console.error("Invalid index");
      return null; // You can also throw an error here if you prefer
    }
  }

  clear(){
    this.todos = []
    return this.todos
  }
}

module.exports = Todo;
