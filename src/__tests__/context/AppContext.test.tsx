import { render } from '@testing-library/react';
import { AppProvider } from '../context/AppContext';

test('renders AppProvider without crashing', () => {
  render(
    <AppProvider>
      <div>Test</div>
    </AppProvider>
  );
});