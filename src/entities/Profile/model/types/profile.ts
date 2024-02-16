import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'Incorrect user data',
    INCORRECT_USER_AGE = 'Incorrect age',
    INCORRECT_USER_COUNTRY = 'Incorrect country',
    NO_DATA = 'No data',
    SERVER_ERROR = 'Server error'
}

export interface Profile {
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileChema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileErrors[];
}