// // importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
// // import { createAccountFunction, loginAccountFunction, loginWithGoogle } from './firebase.js';
// import {
//   logOut, createPost, editPost, deletePost,
// } from '../src/firebase.js';

import { loginWithGoogle } from '../src/firebase';

jest.mock('firebase/auth');
test('should return a google email', async () => {
  const email = await loginWithGoogle('menavillalobos17@gmail.com, 171717');
  expect(email).toContain('menavillalobos17@gmail.com');
});

// describe('myFunction', () => {
//   it('is a function', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

// describe('createPost', () => {
//   it('is a function', () => {
//     expect(typeof createPost).toBe('function');
//   });
// });
