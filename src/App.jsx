import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CertificatesPage from './components/CertificatesPage';
  
function App() {
  return (
    <div>
      <Router>
        <Sidenav/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<CertificatesPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
