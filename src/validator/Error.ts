export interface IError {
    readonly code: string;
    readonly message: string;

    // getCode(): string;
    //
    // getMessage(): string;
}

export class Error implements IError {
    readonly code: string = 'E0000';
    // readonly message: string;

    constructor(public readonly message: string) {

    }

    // getMessage() {
    //     return this.message;
    // }
    //
    // getCode() {
    //     return this.code;
    // }
}
