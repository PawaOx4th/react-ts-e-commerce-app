export interface APIResponseErrorType {
  data?: null;
  error?: APIErrorType;
}

export interface APIErrorType {
  status?: number;
  name?: string;
  message?: string;
  details?: object | null;
}

export type AxiosReturnType<T> = Promise<[T, null] | [null, string]>;
