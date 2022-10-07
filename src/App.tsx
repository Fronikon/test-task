import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/index';
import Header from './components/Header/index';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/main" replace={true} />}/>
        <Route path='/main/*' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
