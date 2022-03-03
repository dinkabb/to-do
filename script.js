(function () {
  "use strict";

  class Todo {
    constructor() {
      this.input = document.querySelector("input");
      this.addButton = document.querySelector(".addButton");
      this.list = document.querySelector("ol");
    }

    removeItem = (event) => {
      console.log("eeeeeeeeeeeeee", event);
      const removeButton = event.target;
      removeButton.parentNode.remove();
    };

    addRemoveButton = (listItem) => {
      const removeButton = document.createElement("button");
      removeButton.className = "removeButton";
      removeButton.textContent = "remove";

      //dodat delete handler
      removeButton.addEventListener("click", this.removeItem);

      listItem.appendChild(removeButton);
    };

    markDone = (event) => {
      const clickedCheckbox = event.target;
      console.log("clickedCheckbox", clickedCheckbox);
      console.log("testttttttt", clickedCheckbox.checked);

      /*       if (clickedCheckbox.checked) {
          clickedCheckbox.parentNode.classList.add('done');
        } else {
          clickedCheckbox.parentNode.classList.remove('done');
        } */

      clickedCheckbox.parentNode.classList.toggle("done");
    };

    addCheckbox = (listItem) => {
      const cbx = document.createElement("input");
      cbx.setAttribute("type", "checkbox");

      //dodat click handler
      cbx.addEventListener("click", this.markDone);

      listItem.insertBefore(cbx, listItem.firstChild);
    };

    createItem = (unos) => {
      console.log("unos", unos);
      const item = document.createElement("li");
      item.innerText = unos;

      //dodaj remove button
      this.addRemoveButton(item);

      //dodaj checkbox
      this.addCheckbox(item);

      return item;
    };

    addItem = () => {
      const text = this.input.value;
      console.log("text", text);
      const newTodoItem = this.createItem(text);
      this.list.appendChild(newTodoItem);
      this.input.value = "";
    };

    addListeners = () => {
      console.log("addListeners");
      this.addButton.addEventListener("click", this.addItem);
    };
    /* init = () => {
        console.log('prototype init');
        this.addListeners();
      }; */
  }

  Todo.prototype.init = function () {
    console.log("prototype init");
    this.addListeners();
  };

  const todoBrain = new Todo();
  window.addEventListener("load", todoBrain.init());
})();
