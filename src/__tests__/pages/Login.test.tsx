import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login';
import { AppProvider } from '../../context/AppContext';

test('renders Login without crashing', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Login />
      </AppProvider>
    </BrowserRouter>
  );
});

test('submits login form', () => {
  const { getByLabelText, getByText } = render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppProvider>
        <Login />
      </AppProvider>
    </BrowserRouter>
  );
  fireEvent.change(getByLabelText(/email/i), { target: { value: 'sarah.mitchell@example.com' } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'password123' } });
  fireEvent.click(getByText(/login/i));
});