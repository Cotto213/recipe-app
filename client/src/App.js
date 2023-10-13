
import Home from './screens/home.jsx';
import CreateRecipe from './screens/createRecipe.jsx';
import Auth from './screens/auth.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SavedRecipes from './screens/savedRecipes.jsx';

function App() {
  return (
    <div className="App">
<Router>

<Routes> 

<Route path="/" element={<Home/>}/>
<Route path="/create" element={<CreateRecipe/>}/>
<Route path="/auth" element={<Auth/>}/>
<Route path="/saved" element={<SavedRecipes/>}/>

</Routes>



</Router>


     
      
      
      </div>


  );
}

export default App;
