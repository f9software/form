import "jasmine";
import {Field} from "../src/Field";
import {Form} from "../src/Form";
import {Empty} from "../src/validator/Empty";

describe('Form', () => {

    it('Basic tests', () => {

        const notEmpty = new Empty();

        const firstName = new Field({
            name: 'firstName',
            validators: [notEmpty]
        });

        const lastName = new Field({
            name: 'lastName',
            validators: [notEmpty]
        });

        const form = new Form({
            fields: [firstName, lastName]
        });

        expect(form.isValid()).toBe(false);

        firstName.set('value', 'John');
        expect(form.isValid()).toBe(false);

        lastName.set('value', 'Doe');
        expect(form.isValid()).toBe(true);

        lastName.set('value', '');
        expect(form.isValid()).toBe(false);

    });

});
