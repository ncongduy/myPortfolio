import {Routes, Route} from 'react-router-dom';

import Topbar from './components/topbar';
import HomePage from './pages/homepage';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <Topbar />

      <Routes>
        <Route path="/myPortfolio" element={<HomePage />} />
        <Route path="/myPortfolio/projects" element={<Projects />} />
        <Route path="/myPortfolio/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
