import {Field} from "./Field";
import {Collection} from '@f9software/collection';

export class Form {
    private fields: Collection<Field> = new Collection<Field>(field => field.getName());

    public constructor(fields: Field[]) {
        this.fields.addAll(fields);
    }

    isValid(): boolean {
        // if any of the fields is invalid, then the entire form is invalid
        return !this.fields.getRange().some(field => !field.isValid());
    }
}
