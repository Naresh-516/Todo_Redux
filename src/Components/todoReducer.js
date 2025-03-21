const initialState={
    todos : [],
}

export default function todoReducer(state=initialState,action){

    switch(action.type){
        case "ADD":
            return {
              ...state,
              todos: [...state.todos, action.info],
            };
          ;
          case "TOGGLE":
            return {
              ...state,
              todos: state.todos.map((todo) =>
                todo.id === action.info
                  ? { ...todo, completed: !todo.completed }
                  : todo
              ),
            };
          
            case "Del":
              console.log('Current todos:', state.todos);   // Check the current todos
              console.log('Deleting todo with id:', action.info);  // Check the id you're trying to delete
              return {
                  ...state,
                  todos: state.todos.filter((todo) => todo.id !== action.info),
              
              };
          
        default : return state;
    }

}
