import { ValidationProblemDetails } from './validation-problem-details';

export class BadRequestHelper {

    static getErrorMessage(errorObj: ValidationProblemDetails): string {
        if (!errorObj || !errorObj.errors) return '';

        let errorMsg = '';
        let count = 0;

        for (const fieldName in errorObj.errors) {
            if (!errorObj.errors[fieldName]) continue;

            const fieldErrors = errorObj.errors[fieldName];
            if (!fieldErrors || fieldErrors.length === 0) continue;

            for (const error of fieldErrors) {
                if (!error || error.length === 0) continue;

                if (count > 0) errorMsg += '\n';
                errorMsg += error;
                count++;
            }
        }

        return errorMsg;
    }

}
