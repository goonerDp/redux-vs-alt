import alt from "../alt";

class TodoActions {
  constructor() {
    this.generateActions("addTodo", "toggleTodo", "setVisibilityFilter");
  }
}

export default alt.createActions(TodoActions);
