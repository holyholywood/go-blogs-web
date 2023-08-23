import { BaseUiError } from "./BaseException";

class NotFoundExceptions extends BaseUiError {
  constructor(message: string) {
    super(message, 404);
    this.name = "NotFoundExceptions";
  }
}

export default NotFoundExceptions;
