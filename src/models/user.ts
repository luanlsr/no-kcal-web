export interface User {
  _id: string,
  name: string;
  lastname: string;
  birthday: Date;
  email: string;
  phone: string;
  sector: string;
  photo: string;
}


export interface CreateUserRequest {
  name: string;
  lastname: string;
  birthday: Date;
  email: string;
  phone: string;
  sector: string;
  photo: string;
}

export interface UpdateUserRequest {
  id: string,
  name: string;
  lastname: string;
  birthday: Date;
  email: string;
  phone: string;
  sector: string;
  photo: string;
}
