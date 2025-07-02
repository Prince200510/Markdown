import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownViewer.css';

export default function MarkdownViewer({ file }) {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!file) return;
    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error('File not found');
        return res.text();
      })
      .then(setContent)
      .catch(() => setError('Could not load the markdown file.'));
  }, [file]);

  if (!file) return <div className="md-empty">Select a markdown file to view.</div>;
  if (error) return <div className="md-error">{error}</div>;

  return (
    <div className="markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
