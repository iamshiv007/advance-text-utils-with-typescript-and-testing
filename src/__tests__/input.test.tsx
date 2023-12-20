import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Input from '../components/home/Input';

test('renders the Input component', () => {
  const setWordsCountMock = jest.fn();
  const setCharactersCountMock = jest.fn();

  render(<Input setWordsCount={setWordsCountMock} setCharactersCount={setCharactersCountMock} />)
});