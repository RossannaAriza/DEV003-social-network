import "@testing-library/jest-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { set, getDatabase, ref } from "firebase/database";
import { showSignUp } from "../src/component/home";
import {
  createAccountFunction,
  loginAccountFunction,
  auth,
} from "../src/firebase";

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


jest.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: jest
    .fn()
    .mockImplementationOnce((auth, email, password) => {
      return Promise.resolve({
        user: {
          uid: "mockUserId",
        },
      });
    }),
  getAuth: jest.fn(() => ({})),
}));

jest.mock("firebase/database", () => {
  return {
    getDatabase: jest.fn(() => ({})),
    set: jest.fn().mockImplementationOnce((ref, user) => {
      return true;
    }),
    ref: jest.fn(() => ({})),
  };
});

// Mock window.alert
const mockAlert = jest.fn();
Object.defineProperty(window, "alert", {
  value: mockAlert,
  writable: true,
});

describe("createAccountFunction", () => {
  test("should create a new user and navigate to mainPage on success", async () => {
    // Crea un elemento de email y lo agrega al cuerpo del documento
    const emailInput = document.createElement("input");
    emailInput.id = "email";
    document.body.appendChild(emailInput);

    // Establece el valor del campo de correo electrónico
    const email = "test@example.com";
    const emailInputEl = document.getElementById("email");

    // Verifica que el elemento exista antes de establecer su valor
    expect(emailInputEl).toBeInTheDocument();

    // Establece el valor del campo de correo electrónico
    emailInputEl.value = email;

    // Verifica que el valor se haya establecido correctamente
    expect(emailInputEl.value).toBe(email);

    // Crea un elemento de contraseña y lo agrega al cuerpo del documento
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password";
    document.body.appendChild(passwordInput);

    // Establece el valor del campo de contraseña
    const password = "password123";
    const passwordInputEl = document.getElementById("password");

    // Verifica que el elemento exista antes de establecer su valor
    expect(passwordInputEl).toBeInTheDocument();

    // Establece el valor del campo de contraseña
    passwordInputEl.value = password;

    // Verifica que el valor se haya establecido correctamente
    expect(passwordInputEl.value).toBe(password);

    // Call the function
    await createAccountFunction();

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      {},
      email,
      password
    );

    expect(ref).toHaveBeenCalledWith({}, `users/mockUserId`);
  });
});
