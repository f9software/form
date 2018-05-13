import "jasmine";
import {Field} from "../src/Field";
import {Empty} from "../src/validator/Empty";

describe('Field', () => {

    it('Basic test', () => {

        const notEmpty = new Empty();

        const field = new Field({
            name: 'firstName',
            validators: [notEmpty]
        });

        field.setValue('');
        expect(field.isValid()).toBe(false);
        expect(field.getErrors()).toBeTruthy();

        field.clearErrors();
        field.setValue('Iulian');
        expect(field.isValid()).toBe(true);
        expect(field.getErrors()).toBeFalsy();
    });

});
