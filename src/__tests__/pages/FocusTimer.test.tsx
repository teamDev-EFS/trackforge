import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FocusTimer from '../FocusTimer';
import { AppProvider } from '../../context/AppContext';

test('renders FocusTimer without crashing', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <FocusTimer />
      </AppProvider>
    </BrowserRouter>
  );
});