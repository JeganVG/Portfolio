import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Career from './pages/Career';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Home Page */}
        <Route path="/" element={<Home />} />

        {/* The New Career Page */}
        <Route path="/career" element={<Career />} />
      </Routes>
      <ChatWidget />
    </BrowserRouter>
  )
}

export default App