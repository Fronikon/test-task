import { Navigate, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home/index';

const App = () => {
  return (
    <div className="App">
      <div>
        <NavLink to='/main/form' end>Форма для заявки</NavLink>
        <NavLink to='/main/table' end>Сводная таблица</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<Navigate to="/main" replace={true} />}/>
        <Route path='/main/*' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
