import {IValidator} from "./Validator";
import {Result} from "./Result";
import {Error} from "./Error";

export class Numeric implements IValidator {
    validate(value: any) {
        const valid = value !== null && typeof value === 'number' && !isNaN(value);

        return new Result(
            valid,
            !valid ? new Error('Value "' + value + '" is not a numeric value.') : null
        );
    }
}
