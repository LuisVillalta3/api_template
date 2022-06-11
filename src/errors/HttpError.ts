export class HttpError extends Error {
  declare statusCode: number;

  declare message: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
