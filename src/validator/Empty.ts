import {IValidator} from "./Validator";
import {Result} from "./Result";
import {Error} from "./Error";

export class Empty implements IValidator {
    validate(value: any) {
        const valid = value !== null && value !== undefined && value !== '';

        return new Result(
            valid,
            !valid ? new Error('Value cannot be empty.') : null
        );
    }
}
