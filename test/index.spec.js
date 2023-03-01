import { beforeAll } from '@jest/globals';
import { showSignUp } from '../src/component/home';
import { createAccountFunction, loginAccountFunction , auth} from '../src/firebase';


describe('showSignUp', () => {
  it('is a function', () => {
    expect(typeof showSignUp).toBe('function');
  });
});

describe('createAccountFunction', () => {
  it('is a function', () => {
    expect(typeof createAccountFunction).toBe('function');
  });
});

