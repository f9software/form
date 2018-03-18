import "jasmine";
import {Empty} from "../../src/validator/Empty";
import {Error} from "../../src/validator/Error";

describe('Empty', () => {

    it('Basic tests', () => {

        const validator = new Empty();

        const result = validator.validate('');
        expect(result.valid).toBe(false);
        expect(result.error).toBeTruthy();
        expect(result.error instanceof Error).toBe(true);

        const result2 = validator.validate('Not Empty');
        expect(result2.valid).toBe(true);
        expect(result2.error).toBeFalsy();

    })

});
