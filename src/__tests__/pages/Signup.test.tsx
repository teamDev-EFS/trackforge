import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Signup from '../../pages/Signup';
import { AppProvider } from '../../context/AppContext';

test('renders Signup without crashing', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Signup />
      </AppProvider>
    </BrowserRouter>
  );
});

test('submits signup form', () => {
  const { getByLabelText, getByRole } = render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Signup />
      </AppProvider>
    </BrowserRouter>
  );
  fireEvent.change(getByLabelText(/name/i), { target: { value: 'Sarah Mitchell' } });
  fireEvent.change(getByLabelText(/email/i), { target: { value: 'sarah.mitchell@example.com' } });
  fireEvent.change(getByLabelText(/^password$/i), { target: { value: 'password123' } });
  fireEvent.change(getByLabelText(/confirm password/i), { target: { value: 'password123' } });
  fireEvent.click(getByRole('button', { name: /^sign up$/i }));
});