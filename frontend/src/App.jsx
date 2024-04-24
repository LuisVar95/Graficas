import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './layouts/Layout';
import Index from './paginas/Index';
import './index.css';

function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Index/>} />
              </Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
