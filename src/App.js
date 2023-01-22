
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './components/Routes/Route';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="App">
      <Toaster></Toaster>
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
