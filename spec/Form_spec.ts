import "jasmine";
import {Field} from "../src/Field";
import {Form} from "../src/Form";
import {Empty} from "../src/validator/Empty";

describe('Form', () => {

    it('Basic tests', () => {

        const notEmpty = new Empty();

        const firstName = new Field();
        firstName.setName('firstName');
        firstName.setValidators([notEmpty]);

        const lastName = new Field({
            name: 'lastName',
            validators: [notEmpty]
        });

        const form = new Form([firstName, lastName]);

        expect(form.isValid()).toBe(false);

        firstName.setValue('John');
        expect(form.isValid()).toBe(false);

        lastName.setValue('Doe');
        expect(form.isValid()).toBe(true);

        lastName.setValue('');
        expect(form.isValid()).toBe(false);

    });

});
