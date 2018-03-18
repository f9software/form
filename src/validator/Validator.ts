import {IResult} from "./Result";

export interface IValidator {
    validate(value: any): IResult;
}
