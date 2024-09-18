// method k liy use selector cut krny k liy usedispatch
import { useDispatch , useSelector } from "react-redux"
import { deletetodo ,donetodo } from "./slice"
// import{useSelector} from "react"
export default function todos(){
    let todos=useSelector((state)=>state.Todos)
    let dispatch=useDispatch()

    let Delete=(id)=>{
        dispatch(deletetodo(id))

    }

    let markdone =(id)=>{
        dispatch(donetodo(id))
    }

    return(
        <>
        {
           
           todos.map((todo)=>(
            <ul style={{backgroundColor:todo.taskdone?'green':'none',
                border:'2px , solid, white'
            }}>
                <li style={{listStyle:'none' }}key={todo.id}>
                <p style={{textDecoration:todo.taskdone?'line-through':'none'}} >{todo.task}</p>
                <button style={{border:'2px,solid ,red' , color:'red', margin:'10px'}}
                onClick={()=> Delete(todo.id)}>x</button>


                <input type="checkbox" checked={todo.taskdone}
                onChange={()=> markdone(todo.id)} />

                mark  as done 
                </li>
            </ul>
           ))
        }
        </>
    )
    
}