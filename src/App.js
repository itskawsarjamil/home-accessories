
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './components/Routes/Route';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
