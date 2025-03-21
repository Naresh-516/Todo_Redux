const addTodo=(text)=>({
    type :"ADD",
    info : { id : Date.now(),text ,completed:false}
});
const toggleTodo=(index)=>({
    type :"TOGGLE",
    info : index
});
const delTodo=(index)=>({
    type :"Del",
    info : index
});
export {addTodo,toggleTodo,delTodo}