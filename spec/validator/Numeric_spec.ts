import "jasmine";
import {Numeric} from "../../src/validator/Numeric";

describe('Numeric', () => {

    it('Basic tests', () => {

        const numeric = new Numeric();

        const result1 = numeric.validate(10);
        expect(result1.valid).toBe(true);
        expect(result1.error).toBeFalsy();

        const result2 = numeric.validate('10');
        expect(result2.valid).toBe(false);
        expect(result2.error).toBeTruthy();

        const result3 = numeric.validate('One');
        expect(result3.valid).toBe(false);
        expect(result3.error).toBeTruthy();

    });

});
