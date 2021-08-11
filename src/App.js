import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import {fetchFollowers } from './redux/action/gitHubAction'
function App() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.githubReducer )
  console.log(products);

  const ctaUpdataHandler = () => {
   const dataPassToAction = "naveed-rana";
     dispatch(fetchFollowers(dataPassToAction))

  }
 
  return (
    <div className="App">
      <button >fetch Products Reducer</button>
      <button >fetch followers Reducer</button>
      <button onClick={ctaUpdataHandler} >Update Reducer</button>

    </div>
  );
}

export default App;
