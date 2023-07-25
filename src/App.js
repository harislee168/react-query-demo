import {Routes, Route} from 'react-router-dom'
import { HomePage } from './components/Home.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroePage } from './components/RQSuperHeroes.page';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='main-body'>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='super-heroes' element={<SuperHeroesPage />}></Route>
          <Route path='rq-super-heroes' element={<RQSuperHeroePage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
