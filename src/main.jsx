import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient } from '@tanstack/react-query';

import App from './App.jsx';
import './assets/css/styles.scss';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
