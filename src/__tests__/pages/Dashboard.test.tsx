import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';
import { AppProvider } from '../../context/AppContext';

test('renders Dashboard without crashing', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Dashboard />
      </AppProvider>
    </BrowserRouter>
  );
});