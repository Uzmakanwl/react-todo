import {createSlice,nanoid} from "@reduxjs/toolkit"
let initialState ={
   Todos:[

   ]
}

let slicetodo =createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            const newtodo ={
        
                id:nanoid(),
                task:action.payload,
                taskdone:false,
            }
            state.Todos.push(newtodo)    
        },

        deleteTodo:(state,action)=>{
            state.Todos =state.Todos.filter((todo) => todo.id !==action.payload)
        },
        donetodo:(state,action) =>{
            let todo = state.Todos.find((todo)  => todo.id ===  action.payload)
            if (todo){
                todo.taskdone=true;
            }

        }

    }
})
export default slicetodo.reducer;
export const {addtodo,deletetodo,donetodo}=slicetodo.actions;