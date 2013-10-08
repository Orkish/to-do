function TodoItem(text) {
  this.text = text;
};


function completedButton(){
  var complete_button = document.createElement('button');
  complete_button.innerHTML = 'Completed';
  complete_button.onclick = function(){
    complete = document.createElement('li');
    complete.innerHTML = complete_button.parentNode.innerHTML;
    document.getElementById('completed-items').appendChild(complete);
    complete_button.parentNode.remove();
  }
  return complete_button;
};

function deleteButton(){
  var delete_button = document.createElement('button');
  delete_button.innerHTML = 'Deleted';
  delete_button.onclick = function(){
    delete_button.parentNode.remove();
  };
  return delete_button;
};



var todo_app = {
  createTask: function() {
    var text = document.getElementById("new-task-field").value;
    // var text = text_input.value;
    var todo_item = new TodoItem(text);
    todo_app.appendTask(todo_item);
  },

  appendTask: function(todo_item) {
    var todo_list = document.getElementById("todo-items");
    element = document.createElement("li");
    element.innerHTML = todo_item.text;
    todo_list.appendChild(element);
    element.appendChild(deleteButton());
    element.appendChild(completedButton());
  }
};

window.onload = function(){
  document.getElementById("add-item").addEventListener('click', function(){
    todo_app.createTask();
  });
};




