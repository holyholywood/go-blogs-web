export type postBodyRequestType = {
  [key: string]: any;
};

export type responseBodyType<T> = {
  status: boolean;
  statusCode: number;
  message: string;
  payload: T;
  meta?: apiMetaType;
};

export type apiMetaType = {
  current_page: number;
  last_page: number;
  from: number;
  to: number;
  per_page: number;
  total_data: number;
  show: number;
};
