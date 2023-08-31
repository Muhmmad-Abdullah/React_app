// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen } from '@testing-library/react';
import EmployeesList from './components/EmployeesList';

test('renders table headers', () => {
  render(<EmployeesList />);
  
  const nameHeader = screen.getByText(/Name/i);
  const salaryHeader = screen.getByText(/Salary/i);
  const ageHeader = screen.getByText(/Age/i);

  expect(nameHeader).toBeInTheDocument();
  expect(salaryHeader).toBeInTheDocument();
  expect(ageHeader).toBeInTheDocument();
});

