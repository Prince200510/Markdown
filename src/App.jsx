import { useState } from 'react';
import Login from './Login';
import MarkdownViewer from './MarkdownViewer';
import './App.css';

const MARKDOWN_FILES = [
  { label: 'C++ Mastery Roadmap', file: 'C++_COMPLETE_MASTERY_ROADMAP.md' },
  { label: 'DSA Notes', file: 'DSA.md' },
  { label: 'App Info', file: 'README.md' },
];

function App() {
  const [user, setUser] = useState(null);
  const [selected, setSelected] = useState(MARKDOWN_FILES[0].file);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div>
      <header className="app-header">
        <h1 className="app-title">📚 Markdown Viewer</h1>
        <div className="user-info">
          <span className="user-name">👤 {user}</span>
          <button onClick={() => setUser(null)} className="logout-btn">
            Logout
          </button>
        </div>
      </header>
      
      <nav className="nav-container">
        {MARKDOWN_FILES.map(md => (
          <button
            key={md.file}
            onClick={() => setSelected(md.file)}
            className={`nav-btn ${selected === md.file ? 'active' : ''}`}
          >
            {md.label}
          </button>
        ))}
      </nav>
      
      <MarkdownViewer file={selected} />
      
      <footer className="app-footer">
        <hr className="footer-divider" />
        <div className="footer-text">
          Made with <span className="footer-highlight">Vite + React</span> | 
          <span className="footer-highlight"> Markdown Viewer</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
