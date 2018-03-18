import {IError} from "./Error";

export interface IResult {
    readonly valid: boolean;

    readonly error: IError;
}

export class Result {
    constructor(public readonly valid: boolean, public readonly error: IError) {}

    // isValid() {
    //     return this.valid;
    // }
    //
    // getError() {
    //     return this.error;
    // }
}