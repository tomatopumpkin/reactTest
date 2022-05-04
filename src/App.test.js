import { render, screen } from '@testing-library/react';
import ContactPage from './page/contact/contact.component';

test('renders learn react link', () => {
  render(<ContactPage />);
  const linkElement = screen.getByText(/ติดต่อสอบถามเพิ่มเติม/i);
  expect(linkElement).toBeInTheDocument();
});
