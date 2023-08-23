class BaseUiError extends Error {
  public code: number;
  constructor(message: string, code: number) {
    super(message);
    this.name = "NotFoundExceptions";
    this.code = code;
  }
}

export { BaseUiError };
