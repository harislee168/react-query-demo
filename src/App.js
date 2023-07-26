import {Routes, Route} from 'react-router-dom'
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import { HomePage } from './components/Home.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroePage } from './components/RQSuperHeroes.page';
import { NavBar } from './components/NavBar';
import { ButtonSuperHeroes } from './components/ButtonSuperHeroes';
import { RQSuperHeroPage } from './components/RQSuperHero.page';
import { ParallelQueriesPage } from './components/ParallelQueries.page';
import { DynamicParallelPage } from './components/DynamicParallel.page';
import { DependentQueriesPage } from './components/DependentQueries.page';
import { PaginatedPage } from './components/Paginated.page';
import { InifniteQueriesPage } from './components/InifniteQueries.page';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div>
          <NavBar />
        </div>
        <div className='main-body'>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='super-heroes' element={<SuperHeroesPage />}></Route>
            <Route path='rq-super-heroes' element={<RQSuperHeroePage />}></Route>
            <Route path='button-super-heroes' element={<ButtonSuperHeroes />}></Route>
            <Route path='rq-super-heroes/:id' element={<RQSuperHeroPage />}></Route>
            <Route path='parallel-queries' element={<ParallelQueriesPage />}></Route>
            <Route path='dynamic-queries' element={<DynamicParallelPage heroIds={[1,2]}/>}></Route>
            <Route path='dependent-queries' element={<DependentQueriesPage email='helloworld@yahoo.com'/>}></Route>
            <Route path='color-queries' element={<PaginatedPage />}></Route>
            <Route path='infinite-queries' element={<InifniteQueriesPage />}></Route>
          </Routes>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>

  );
}

export default App;
