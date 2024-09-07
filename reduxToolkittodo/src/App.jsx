import {useDispatch, useSelector} from 'react-redux';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {

return (
    <>
        <h1>Hello</h1>
        <AddTodo/>
        <Todos/>
    </>
  )
}

export default App
