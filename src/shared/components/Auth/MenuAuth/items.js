import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    to: '/signin',
    text: 'Sign In',
  },
  {
    id: nanoid(),
    to: '/signup',
    text: 'Sign Up',
  },
];

export default items;
