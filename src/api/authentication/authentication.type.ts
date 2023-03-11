export interface UserType {
  id?: number;
  username?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SignUpResponseType {
  user?: UserType;
}

export type SingInResponseType = {
  jwt?: string;
  user?: Required<UserType>;
};

export type JwtType = {
  id: number;
  iat: number;
  exp: number;
};
