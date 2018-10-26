import { fakeAsync, tick } from '@angular/core/testing';
import { ValidationProblemDetails } from './validation-problem-details';
import { BadRequestHelper } from './bad-request-helper';

describe('BadRequestHelper', () => {

    const errors = {
        'Email': [
            'Email Address is required',
            'Invalid email address'
        ],
        'Surname': [
            'Surname is required'
        ],
        'ConfirmPassword': [
            'Passwords do not match'
        ],
        '': [
            'User is already registered'
        ]
    };

    const responseObj: ValidationProblemDetails = {
        errors: errors
    };

    const expectedErrorMsg =
        'Email Address is required' + '\n' +
        'Invalid email address' + '\n' +
        'Surname is required' + '\n' +
        'Passwords do not match' + '\n' +
        'User is already registered';

    describe('getErrorMessage', () => {
        it(
            'should return correct error message',
            fakeAsync(() => {
                const actual = BadRequestHelper.getErrorMessage(responseObj);
                tick();

                expect(actual).toBeTruthy();
                expect(actual).toEqual(expectedErrorMsg);
            })
        );
    });

});
