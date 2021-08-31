import {useSelector} from 'react-redux'
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
function App() {
  const todofromRedux = useSelector(state => state.TodoReducer )
  return (
    <div className="App"> 
      <header>     <h1> Todo App </h1>
</header>
<Header   />
<TodoList todos={todofromRedux} />
    </div>
  );
}

export default App;