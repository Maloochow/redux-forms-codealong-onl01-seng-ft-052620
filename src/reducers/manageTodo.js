export default function manageTodo(
  state = {
    todos: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_TODO":
      console.log({ todos: state.todos });
      return { todos: state.todos.concat(action.todo) };
    default:
      return state;
  }
}
