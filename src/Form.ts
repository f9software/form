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

    /**
     * Sets fields values in bulk.
     * @param {{[p: string]: any}} data
     */
    setValues(data: {[key: string]: any}): void {
        Object.keys(data)
            .forEach(fieldName => {
                const field = this.getField(fieldName);

                if (!field) {
                    throw 'Field "' + fieldName + '" does not exist on this form.';
                }

                field.setValue(data[fieldName]);
            });
    }

    /**
     *
     * @param {string} fieldName
     * @returns {Field | undefined}
     */
    getField(fieldName: string): Field | undefined {
        return this.fields.get(fieldName);
    }
}
