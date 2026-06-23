export interface User {
  dni?: string;
  email: string;
  password: string;
}
export const registeredUsers: User[] = [
  { email: "alumno@idat.pe", password: "123456" },
];
