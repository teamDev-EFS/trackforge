import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Profile from '../Profile';
import { AppProvider } from '../../context/AppContext';

test('renders Profile without crashing', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Profile />
      </AppProvider>
    </BrowserRouter>
  );
});