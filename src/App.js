

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { FrontPage } from './components/FrontPage/FrontPage';

import { Context } from './Context/Context';
import { Search } from './components/Search/Search';
import { Pokedex } from './components/Pokedex/Pokedex';






function App() {
  return (
    <div className="App">

<Context>
<Routes>

<Route path='/' element={<FrontPage/>}/>


<Route path='/Home' element={<Pokedex/>} />
<Route path='/Search' element={<Search/>}/>

</Routes>
</Context>
    </div>
  );
}

export default App;
