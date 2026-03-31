import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Reflection from '../Reflection';
import { AppProvider } from '../../context/AppContext';

test('renders Reflection without crashing', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Reflection />
      </AppProvider>
    </BrowserRouter>
  );
});

test('adds a reflection', () => {
  const { getByText } = render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Reflection />
      </AppProvider>
    </BrowserRouter>
  );
  fireEvent.click(getByText('Add Reflection'));
  // Further interactions to add a reflection can be simulated here
});