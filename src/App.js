import './App.css';
import {Routes, Route} from 'react-router-dom'
import CreateAds from './pages/CreateAds';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
function App() {
 
  return (
    <div className="App">
     <Header/>
     <main>

     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/create_ad' element={<CreateAds/>}/>
     </Routes>
     </main>
    </div>
  );
}

export default App;
