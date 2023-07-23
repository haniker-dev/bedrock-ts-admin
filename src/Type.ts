export type Action = { kind: 'Login'; action: LoginAction };

export type LoginAction =
  | { kind: 'ChangeUsername'; value: string }
  | { kind: 'ChangePassword'; value: string }
  | { kind: 'Submit' };

export type State = {
  login: LoginState;
  authState: AuthState | null;
};

export type LoginState = {
  email: string | null;
  password: string | null;
};

export type AuthState = {
  userID: number;
};
