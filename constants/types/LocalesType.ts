type LocaleType = string | number;
export type BackendMessageKeys =
    'DONE' |
    'SOMETHING_WENT_WRONG' |
    'EMAIL_IS_EXIST' |
    'USER_REGISTRATION_FAILED' |
    'USER_SUCCESSFULLY_REGISTERED' |
    'EMAIL_SUCCESSFULLY_CONFIRMED' |
    'EMAIL_IS_NOT_VALID' |
    'INVALID_EMAIL' |
    'INVALID_PASSWORD' |
    'INVALID_FULLNAME' |
    'INVALID_BIRTHDAY' |
    'INVALID_TOKEN' |
    'BCRYPT_ERROR' |
    'USER_NOT_FOUND' |
    'USER_LOGIN_PROGRESS_FAILED' |
    'USER_SUCCESSFULLY_LOGIN' |
    'EMAIL_IS_NOT_REGISTERED' |
    'EMAIL_OR_PASSWORD_INCORRECT' |
    'LINK_EXPIRED' |
    'OLD_PASSWORD_INCORRECT' |
    'PASSWORD_SUCCESSFULLY_CHANGED' |
    'PASSWORD_RESET_LINK_WILL_SENT' |
    'PASSWORDS_ARE_SAME' |
    'INVALID_BODY' |
    'BIRTHDAY_ALREADY_EXIST' |
    'AUTH_REQUIRED' |
    'PARAM_REQUIRED' |
    'OBJECT_NOT_FOUND' |
    'INVALID_PLACE_NAME' |
    'INVALID_WEB_SITE_URL' |
    'INVALID_ZIP_CODE' |
    'INVALID_ADDRESS' |
    'INVALID_PLACE_TYPE' |
    'INVALID_CITY' |
    'INVALID_STATE' |
    'INVALID_PHONE' |
    'INVALID_OPENING_HOURS' |
    'ALREADY_EXIST' |
    'PLACE_NOT_FOUND' |
    'YOU_CANNOT_EDIT_PLACE_ID' |
    'YOU_CANNOT_EDIT_BRAND_ID' |
    'YOU_CANNOT_EDIT_OWNER_ID' |
    'BRAND_NOT_FOUND' |
    'BRAND_ALREADY_EXIST' |
    'INVALID_BRAND_NAME' |
    'INVALID_BRAND_BIO_SIZE' |
    'NAME_ALREADY_TAKEN' |
    'INVALID_CONVERSATION_KEY' |
    'MODEL_IS_UNDEFINED' |
    'MODEL_IS_UNSUPPORTED' |
    'KEY_NAME_IS_UNDEFINED' |
    'EMAIL_CONFIRM_REQUIRED'

export interface Buttons {
    search: LocaleType;
    filter: LocaleType;
    login: LocaleType;
    logout: LocaleType;
    continue: LocaleType;
    waiting: LocaleType;
    get_started: LocaleType;
    save: LocaleType;
    change: LocaleType;
}

export interface LanguageContent {
    lang: LocaleType;
    note: LocaleType;
    az: LocaleType;
    en: LocaleType;
    ru: LocaleType;
    email_confirming: LocaleType;
    please_wait: LocaleType;
    redirecting_to_home: LocaleType;
    redirecting_to_login: LocaleType;
    error: LocaleType;
    greetings: LocaleType;
    lets_get_started: LocaleType;
    or: LocaleType;
    continue_with: LocaleType;
    please_try_again_later: LocaleType;
    service_temporarily_unavailable: LocaleType;
    coming_soon: LocaleType;
    we_are_working_on_it: LocaleType;
    buttons: Buttons;
    backend_messages: Record<BackendMessageKeys, string>;
    pages: PagesType;
}

export type LangOptionsType = 'az-AZ' | 'en-US' | 'ru-RU';
export interface AvailableLocalItem {
    messages: object;
    label: LocaleType;
    iso: LangOptionsType;
    icon: any
}

export type AvailableLocals = Array<AvailableLocalItem>;
export type PagesType = {
    [key: string]: {
        title: LocaleType,
        description: LocaleType,
        keywords: LocaleType,
        utilities?: any,
    }
}