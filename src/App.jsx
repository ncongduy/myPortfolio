import {Routes, Route} from 'react-router-dom';

import Topbar from './pages/topbar';
import Intro from './pages/intro';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function App() {
  return (
    <div>
      <Topbar />

      <Routes>
        <Route path="/myPortfolio" element={<Intro />} />
        <Route path="/myPortfolio/portfolio" element={<Portfolio />} />
        <Route path="/myPortfolio/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
