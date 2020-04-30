
function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    ToDos.push({
      title: newToDoText.value,
      complete: false
    }
    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
    });
  );
    newToDoText.value = '';

    renderTheUI();
  }
  function renderTheUI();{
    const toDoList = documentByID('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }
}

window.onload = function() {
  onReady();
}
//   const addToDoForm = document.getElementById('addToDoForm');
//   const newToDoText = document.getElementById('newToDoText');
//   const toDoList = document.getElementById('toDoList');
// }
//
// addToDoForm.addEventListener('submit', event => {
//   event.preventDefault();
//
//   let title = newToDoText.value;
//   let newLi = document.createElement('li');
//   let checkbox = document.createElement('input');
//   checkbox.type = "checkbox";
//
//   let deleteBtn = document.createElement('button');
//   deleteBtn.textContent = "Delete"
//
//   deleteBtn.addEventListener('click', function(event){
//     toDoList.removeChild(this.parentElement);
//   })
//
//   newLi.textContent = title;
//   newLi.appendChild(checkbox);
//   newLi.appendChild(deleteBtn);
//   toDoList.appendChild(newLi);
//   newToDoText.value = '';
// });
