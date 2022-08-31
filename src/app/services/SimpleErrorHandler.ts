import { ErrorHandler } from '@angular/core';

export class SimpleErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log('HOPPLA', { error });
  }
}
