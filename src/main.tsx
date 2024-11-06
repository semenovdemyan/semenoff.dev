// index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './normalize.css';
import './App.css';
import VideoWithDelay from '../src/Components/VideoWithDelay';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="main-wrapper">
      <VideoWithDelay />
      <App />
    </div>
  </StrictMode>
);
