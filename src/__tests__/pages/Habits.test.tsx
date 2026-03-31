import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Habits from '../../pages/Habits';
import { AppProvider } from '../../context/AppContext';

test('renders Habits without crashing', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Habits />
      </AppProvider>
    </BrowserRouter>
  );
});

test('adds a habit', () => {
  const { getByText } = render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Habits />
      </AppProvider>
    </BrowserRouter>
  );
  fireEvent.click(getByText('Add Habit'));
  // Further interactions to add a habit can be simulated here
});