import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Routes, Route } from 'react-router-dom'
import CreateAds from './pages/CreateAds';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
function App() {

  return (
    <div className="App">
      <Header />
      <main>

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/create_ad' element={<CreateAds />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
    </div>
  );
}

export default App;
