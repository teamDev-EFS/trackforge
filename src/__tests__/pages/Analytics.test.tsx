import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Analytics from '../Analytics';
import { AppProvider } from '../../context/AppContext';

test('renders Analytics without crashing', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Analytics />
      </AppProvider>
    </BrowserRouter>
  );
});