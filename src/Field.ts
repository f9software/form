import {Model} from "@f9software/model";
import {IValidator} from "./validator/Validator";
import {IError} from "./validator/Error";

export interface FieldData {
    name: string;
    value: any;
    validators: IValidator[];
    label: string;
}

export class Field extends Model<FieldData> {
    private errors: IError[] = null;

    protected init() {
        return <FieldData> {
            label: null,
            name: null,
            value: null,
            validators: null
        };
    }

    isValid(): boolean {
        // we clear any previous errors when we start a new validation
        this.clearErrors();

        const validators = this.get('validators');
        const value = this.get('value');
        const errors: IError[] = [];

        let valid = true;

        validators.forEach(
            validator => {
                const result = validator.validate(value);

                if (!result.valid) {
                    valid = false;
                    errors.push(result.error);
                }
            }
        );

        if (!valid && errors.length > 0) {
            this.errors = errors;
        }

        return valid;
    }

    getErrors(): IError[] {
        return this.errors;
    }

    clearErrors(): any {
        this.errors = null;
    }
}
