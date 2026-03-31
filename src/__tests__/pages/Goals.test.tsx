import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Goals from '../Goals';
import { AppProvider } from '../../context/AppContext';

test('renders Goals without crashing', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Goals />
      </AppProvider>
    </BrowserRouter>
  );
});

test('adds a goal', () => {
  const { getByText } = render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Goals />
      </AppProvider>
    </BrowserRouter>
  );
  fireEvent.click(getByText('Add Goal'));
  // Further interactions to add a goal can be simulated here
});