import {IValidator} from "./validator/Validator";
import {IError} from "./validator/Error";

export class Field {
    private errors: IError[] = null;

    private name: string;

    private label: string;

    private validators: IValidator[];

    private value: any;

    public constructor(data?: {name?: string, label?: string, validators?: IValidator[]}) {
        if (data) {
            if (data.name) {
                this.setName(data.name);
            }

            if (data.label) {
                this.setLabel(data.label);
            }

            if (data.validators) {
                this.setValidators(data.validators);
            }
        }
    }

    public setValue(value: any) {
        this.value = value;
    }

    public getValue(): any {
        return this.value;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setLabel(label: string) {
        this.label = label;
    }

    public getLabel(): string {
        return this.label;
    }

    public setValidators(validators: IValidator[]) {
        this.validators = validators;
    }

    public getValidators(): IValidator[] {
        return this.validators;
    }

    isValid(): boolean {
        const value = this.getValue();

        // we clear any previous errors when we start a new validation
        this.clearErrors();

        const validators = this.getValidators();
        // const value = this.get('value');
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
