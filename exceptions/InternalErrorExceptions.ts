import { BaseUiError } from "./BaseException";

class InternalErrorExceptions extends BaseUiError {
  constructor(message: string) {
    super(message, 500);
    this.name = "InternalErrorExceptions";
  }
}

export default InternalErrorExceptions;
