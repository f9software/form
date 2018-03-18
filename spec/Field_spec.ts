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

        field.set('value', '');
        expect(field.isValid()).toBe(false);
        expect(field.getErrors()).toBeTruthy();

        field.clearErrors();
        field.set('value', 'Iulian');
        expect(field.isValid()).toBe(true);
        expect(field.getErrors()).toBeFalsy();
    });

});
