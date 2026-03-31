import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Planner from '../../pages/Planner';
import { AppProvider } from '../../context/AppContext';

test('renders Planner without crashing', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Planner />
      </AppProvider>
    </BrowserRouter>
  );
});

test('adds a task', () => {
  const { getByText } = render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Planner />
      </AppProvider>
    </BrowserRouter>
  );
  fireEvent.click(getByText('Add Task'));
  // Further interactions to add a task can be simulated here
});