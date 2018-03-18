import {Model} from "@f9software/model";
import {Field} from "./Field";

export interface FormData {
    name: string;
    fields: Field[];
}

export class Form extends Model<FormData> {
    protected init() {
        return <FormData> {
            name: null,
            fields: null
        };
    }

    isValid(): boolean {
        // if any of the fields is invalid, then the entire form is invalid
        return !this.get('fields').some(field => !field.isValid());
    }
}
