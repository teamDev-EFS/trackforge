import { formatDate, formatCurrency, validateEmail, validatePassword } from '../utils/helpers';

test('formatDate formats date correctly', () => {
  expect(formatDate('2024-06-14')).toBe('Jun 14, 2024');
});

test('formatCurrency formats currency correctly', () => {
  expect(formatCurrency(1234.56)).toBe('$1234.56');
});

test('validateEmail validates email correctly', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('invalid-email')).toBe(false);
});

test('validatePassword validates password correctly', () => {
  expect(validatePassword('password123')).toBe(true);
  expect(validatePassword('short')).toBe(false);
});