// Todo List Application

/* Arrays: a single variable used to store different elements */
var todosArray = ["item1", "item2", "item3"];

// !Requirements: Version 2
/* Function: a set of statements that perform a task.
1. It should have a function to display todos
2. It should have a function to add new todos
3. It should have a function to change todos
4. It should have a function to delete todos */

// 1. It should have a function to display todos.
function displayTodos() {
  console.log("My todos:", todosArray);
}

//2. It should have a function to add new todos.
function addTodo(todo) {
  todosArray.push(todo);
  displayTodos();
}

//3. It should have a function to change todos
function changeTodo(position, newValue) {
  todosArray[position] = newValue;
  displayTodos();
}

//4. It should have a function to delete todos.
function deleteTodo(position) {
  todosArray.splice(position, 1);
  displayTodos();
}

// !Requirements: Version 3
/* Object: a variable with properties (groups related data and Functions together)
Method: a function in an object (a Function which is a property of an object)
1. It should store todos array on an object
2. It should have a displayTodos method
3. It should have an addTodo method
4. It should have a changeTodo method
5. It should have a deleteTodo method 

this: refers to contents within an Object
*/

// 1. It should store todos array on an object
var todoList = {
  todos: todosArray,

  //2. It should have a displayTodos method
  displayTodos: function() {
    console.log("My Todos:", this.todos);
  },

  //3. It should have an addTodo method
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },

  //4. It should have a changeTodo method
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },

  //5. It should have a deleteTodo method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

// !Requirements: Version 4
/* Booleans: values represented by 0(false) or 1(true)
1. todoList.addTodo should add objects
2. todoList.changeTodo should change the todoText properly
3. todoList.toggleCompleted should change the completed property
*/

var todoList = {
  todos: [],

  displayTodos: function() {
    console.log("My Todos:", this.todos);
  },

  // 1. todoList.addTodo should add objects
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  // 2. todoList.changeTodo should change the todoText properly
  changeTodo: function(position, todoText) {
    // this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  // 3. todoList.toggleCompleted should change the completed property
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

//!Requirements: Version 5
/* For Loops and If Statements
1. .displayTodos should show .todoText
2. .displayTodos should tell you if .todos is empty
3. .displayTodos should show .completed
*/

var todoList = {
  todos: [],

  displayTodos: function() {
    // 2. .displayTodos should tell you if .todos is empty
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    }
    //1 .displayTodos should show .todoText
    else {
      console.log("My Todos:");
      // 3. .displayTodos should show .completed
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    // this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

//!Requirements: Version 6
/* Thinking in Code
1. .toggleAll: if everything's true, make everything false
2. .toggleAll: otherwise, make everything true
*/

var todoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("My Todos:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    // this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Obtain number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // 1. .toggleAll: if everything is true, make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      // 2. .toggleAll: otherwise, make everything true
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  }
};

//!Requirements: Version 7
/* HTML: plaintext that gives information to a browser
DOM (Document Object Model): how the browser interprets HTML,
can interact with objects in HTML. Organized in a tree structure.

1. There should be a "Display todos" button and a "Toggle all" button in the app
2. Clicking "Display todos" should run todoList.displayTodos.
3. Clicking "Toggle all" should run todoList.toggleAll 

.addEventListener() // click events, etc.
*/

/* var displayTodosButton = document.getElementById("displayTodosButton");
var toggleAllButton = document.getElementById("toggleAllButton");

displayTodosButton.addEventListener("click", function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener("click", function() {
  todoList.toggleAll();
});

*/

//!Requirements Version 8
/* Refactoring: improves nonfunctional attributes of the software
1. There should be a button for adding todos.
2. There should be a button for changing todos.
3. There should be a button for deleting todos.
4. There should be a button for toggling a todo.
*/

// Replaced Lines 262-271 with lines 281-288
var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    var addTodoText = document.getElementById("addTodoText");
    todoList.addTodo(addTodoText.value);
    addTodoText.value = "";
  },
  changeTodo: function() {
    var changeTodoPosition = document.getElementById("changeTodoPosition");
    var changeTodoText = document.getElementById("changeTodoText");
    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
    changeTodoPosition.value = "";
    changeTodoText.value = "";
  },
  deleteTodo: function() {
    var deleteTodoPosition = document.getElementById("deleteTodoPosition");
    todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
    deleteTodoPosition.value = "";
  },
  toggleCompleted: function() {
    var toggleCompletedPosition = document.getElementById(
      "toggleCompletedPosition"
    );
    todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
    toggleCompletedPosition = "";
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};
