import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    const errors: ValidateProfileErrors[] = [];

    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];        
    }
    const {
        firstname,
        lastname,
        age,
        country
    } = profile;
    

    if (!firstname || !lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_COUNTRY);
    }

    return errors;
};