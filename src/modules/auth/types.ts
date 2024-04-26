export namespace IEntity {
  export interface User {
    id: string;
    first_name: string;
    email: string;
    password: string;
  }
  export interface Register {
    first_name: string;
    email: string;
    password: string;
  }
  export interface Login {
    activation_code: any;
    password1: string;
    email: string;
    password: string;
  }
}
export interface IContext {
  user: IEntity.User | null;
  logout(): void;
  login(user: IEntity.User): void;

  };



