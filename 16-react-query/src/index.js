import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider, QueryClient} from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={client}>
    <App />
    <ReactQueryDevtools/>
  </QueryClientProvider>
);