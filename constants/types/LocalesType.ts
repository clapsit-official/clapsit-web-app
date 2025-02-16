type LocaleType = string | number;

interface BackendMessage {
    DONE: LocaleType;
    SOMETHING_WENT_WRONG: LocaleType;
    EMAIL_IS_EXIST: LocaleType;
    USER_REGISTRATION_FAILED: LocaleType;
    USER_SUCCESSFULLY_REGISTERED: LocaleType;
    EMAIL_SUCCESSFULLY_CONFIRMED: LocaleType;
    EMAIL_IS_NOT_VALID: LocaleType;
    INVALID_EMAIL: LocaleType;
    INVALID_PASSWORD: LocaleType;
    INVALID_FULLNAME: LocaleType;
    INVALID_BIRTHDAY: LocaleType;
    INVALID_TOKEN: LocaleType;
    BCRYPT_ERROR: LocaleType;
    USER_NOT_FOUND: LocaleType;
    USER_LOGIN_PROGRESS_FAILED: LocaleType;
    USER_SUCCESSFULLY_LOGIN: LocaleType;
    EMAIL_IS_NOT_REGISTERED: LocaleType;
    EMAIL_OR_PASSWORD_INCORRECT: LocaleType;
    LINK_EXPIRED: LocaleType;
    OLD_PASSWORD_INCORRECT: LocaleType;
    PASSWORD_SUCCESSFULLY_CHANGED: LocaleType;
    PASSWORD_RESET_LINK_WILL_SENT: LocaleType;
    PASSWORDS_ARE_SAME: LocaleType;
    INVALID_BODY: LocaleType;
    BIRTHDAY_ALREADY_EXIST: LocaleType;
    AUTH_REQUIRED: LocaleType;
    PARAM_REQUIRED: LocaleType;
    OBJECT_NOT_FOUND: LocaleType;
    INVALID_PLACE_NAME: LocaleType;
    INVALID_WEB_SITE_URL: LocaleType;
    INVALID_ZIP_CODE: LocaleType;
    INVALID_ADDRESS: LocaleType;
    INVALID_PLACE_TYPE: LocaleType;
    INVALID_CITY: LocaleType;
    INVALID_STATE: LocaleType;
    INVALID_PHONE: LocaleType;
    INVALID_OPENING_HOURS: LocaleType;
    ALREADY_EXIST: LocaleType;
    PLACE_NOT_FOUND: LocaleType;
    YOU_CANNOT_EDIT_PLACE_ID: LocaleType;
    YOU_CANNOT_EDIT_BRAND_ID: LocaleType;
    YOU_CANNOT_EDIT_OWNER_ID: LocaleType;
    BRAND_NOT_FOUND: LocaleType;
    BRAND_ALREADY_EXIST: LocaleType;
    INVALID_BRAND_NAME: LocaleType;
    INVALID_BRAND_BIO_SIZE: LocaleType;
    NAME_ALREADY_TAKEN: LocaleType;
}
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

    buttons: Buttons;
    backend_messages: BackendMessage;
}

export type LangOptionsType = 'az-AZ' | 'en-US' | 'ru-RU';
export interface AvailableLocalItem {
    messages: object;
    label: LocaleType;
    iso: LangOptionsType;
    icon: any
}

export type AvailableLocals = Array <AvailableLocalItem>;