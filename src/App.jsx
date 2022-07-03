import {Routes, Route} from 'react-router-dom';

import Topbar from './components/topbar';
import HomePage from './pages/homepage';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <Topbar />

      <Routes>
        <Route path="/myPortfolio" element={<HomePage />} />
        <Route path="/myPortfolio/portfolio" element={<Portfolio />} />
        <Route path="/myPortfolio/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
