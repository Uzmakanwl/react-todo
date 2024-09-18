import { Provider } from 'react-redux'
import { store } from './store/store'
import Addtask from './store/addtask'
import Todo from './store/todos'

function App() {


  return (
    <Provider store={store}>
      <h1>TODO</h1> 
      <Addtask></Addtask>
      <Todo></Todo>
      </Provider>
  
    
    
  )
}

export default App
