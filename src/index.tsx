import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import 'assets/styles/tailwind.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Routes />
    </QueryParamProvider>
  </BrowserRouter>
);
