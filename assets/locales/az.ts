import type {LanguageContent} from "~/constants/types/LocalesType";

let locales: LanguageContent;
locales = {
    lang: "Dil",
    note: "Qeyd",
    az: "Azərbaycanca",
    en: "İngiliscə",
    ru: "Rusca",
    email_confirming: "E-poçt ünvanının təsdiqlənməsi",
    please_wait: "Xahiş edirik, gözləyin",
    redirecting_to_home: "Ana səhifəyə yönləndirilir",
    redirecting_to_login: "Giriş səhifəsinə yönləndirilir",
    error: 'Oops! Xəta baş verdi',
    greetings: '{brand}-ə xoş gəlmisiniz!',
    lets_get_started: "Başlayaq!",
    or: 'və ya',
    continue_with: '{platform} ilə davam et',
    please_try_again_later: "Xahiş edirik, daha sonra yenidən cəhd edin",
    service_temporarily_unavailable: "Xidmət müvəqqəti olaraq əlçatan deyil",
    coming_soon: "Tezliklə gəlir...",
    we_are_working_on_it: "Üzərində işləyirik!",
    buttons: {
        search: "Axtar",
        filter: "Filtr",
        login: "Giriş",
        logout: "Çıxış",
        continue: "Davam et",
        waiting: "Gözləmə",
        get_started: "Başla",
        save: "Saxla",
        change: "Dəyiş"
    },
    backend_messages: {
        DONE: 'Tamamlandı!',
        SOMETHING_WENT_WRONG: 'Xəta baş verdi!',
        EMAIL_IS_EXIST: 'Bu e-poçt artıq qeydiyyatdan keçib!',
        USER_REGISTRATION_FAILED: 'İstifadəçi qeydiyyatı uğursuz oldu!',
        USER_SUCCESSFULLY_REGISTERED: 'İstifadəçi uğurla qeydiyyatdan keçdi!',
        EMAIL_SUCCESSFULLY_CONFIRMED: "E-poçt uğurla təsdiqləndi!",
        EMAIL_IS_NOT_VALID: 'E-poçt etibarlı deyil!',
        INVALID_EMAIL: 'E-poçt etibarlı deyil!',
        INVALID_PASSWORD: 'Şifrə etibarlı deyil!',
        INVALID_FULLNAME: 'Tam ad etibarlı deyil!',
        INVALID_TOKEN: 'Nəsə səhv getdi!',
        BCRYPT_ERROR: 'Nəsə səhv getdi!',
        USER_LOGIN_PROGRESS_FAILED: 'Giriş prosesi uğursuz oldu!',
        USER_SUCCESSFULLY_LOGIN: 'İstifadəçi uğurla daxil oldu!',
        EMAIL_IS_NOT_REGISTERED: 'E-poçt qeydiyyatdan keçməyib!',
        EMAIL_OR_PASSWORD_INCORRECT: 'E-poçt və ya şifrə yanlışdır!',
        LINK_EXPIRED: "Linkin müddəti bitib!",
        PASSWORD_SUCCESSFULLY_CHANGED: "Şifrə uğurla dəyişdirildi!",
        PASSWORD_RESET_LINK_WILL_SENT: "Əgər e-poçt ünvanınız sistemimizdə qeydiyyatdan keçibsə, şifrə sıfırlama təlimatları ilə e-poçt göndərəcəyik. Zəhmət olmasa, gələnlər qutunuzu və spam qovluğunu yoxlayın.",
        USER_NOT_FOUND: 'İstifadəçi tapılmadı',
        AUTH_REQUIRED: 'Avtorizasiya tələb olunur',
        PARAM_REQUIRED: 'Parametr tələb olunur',
        OBJECT_NOT_FOUND: 'Obyekt tapılmadı',
        INVALID_PLACE_NAME: 'Yerin adı etibarlı deyil',
        INVALID_WEB_SITE_URL: 'Veb sayt URL-i etibarlı deyil',
        INVALID_ZIP_CODE: 'Poçt indeksi etibarlı deyil',
        INVALID_ADDRESS: 'Ünvan etibarlı deyil',
        INVALID_PLACE_TYPE: 'Yerin növü etibarlı deyil',
        INVALID_CITY: 'Şəhər etibarlı deyil',
        INVALID_STATE: 'Ştat etibarlı deyil',
        INVALID_PHONE: 'Telefon etibarlı deyil',
        INVALID_OPENING_HOURS: 'Açılış saatları etibarlı deyil',
        ALREADY_EXIST: 'Artıq mövcuddur!',
        PLACE_NOT_FOUND: 'Yer tapılmadı',
        YOU_CANNOT_EDIT_PLACE_ID: 'place_id-ni redaktə edə bilməzsiniz',
        YOU_CANNOT_EDIT_BRAND_ID: 'brand_id-ni redaktə edə bilməzsiniz',
        YOU_CANNOT_EDIT_OWNER_ID: 'owner_id-ni redaktə edə bilməzsiniz',
        BRAND_NOT_FOUND: 'Brend tapılmadı',
        BRAND_ALREADY_EXIST: 'Brend artıq mövcuddur',
        INVALID_BRAND_NAME: 'Brend adı etibarlı deyil',
        INVALID_BRAND_BIO_SIZE: 'Brend bio ölçüsü etibarlı deyil',
        NAME_ALREADY_TAKEN: 'Ad artıq götürülüb',
        INVALID_BIRTHDAY: 'Doğum tarixi etibarlı deyil',
        OLD_PASSWORD_INCORRECT: 'Cari şifrə yanlışdır!',
        PASSWORDS_ARE_SAME: 'Yeni şifrə cari şifrə ilə eyni ola bilməz!',
        INVALID_BODY: 'Forma sahələri etibarlı deyil!',
        BIRTHDAY_ALREADY_EXIST: 'Doğum tarixi artıq qeyd edilib!',
        INVALID_CONVERSATION_KEY: "Söhbət açarı etibarlı deyil!",
        MODEL_IS_UNDEFINED: "Model sahəsi tələb olunur!",
        MODEL_IS_UNSUPPORTED: "Dəstəklənməyən model!",
        KEY_NAME_IS_UNDEFINED: "Açar adı tələb olunur!",
        EMAIL_CONFIRM_REQUIRED: "E-poçt təsdiqi tələb olunur!"
    },
    pages: {
        default: {
            title: "Ana səhifə",
            description: "Ana səhifə",
            keywords: "Ana səhifə, Əsas, indeks"
        },
        home: {
            title: "Ana səhifə",
            description: "Ana səhifə",
            keywords: "Ana səhifə, Əsas, indeks"
        },
        getstarted: {
            title: "Başla",
            description: "{brand}-ə xoş gəlmisiniz!",
            keywords: "Başla, Giriş, Çıxış, Qeydiyyat, Sistemdən çıxış, Hesab yarat, Avtorizasiya"
        },
        login: {
            title: "Giriş",
            description: "Təhlükəsiz giriş səhifəmizə xoş gəlmisiniz! Burada öz şəxsi hesabınıza giriş məlumatlarınızı daxil edərək daxil ola bilərsiniz!",
            keywords: "İstifadəçi avtorizasiyası, Hesaba giriş, Təhlükəsiz giriş və qeydiyyat, Daxil ol və ya qeydiyyatdan keç, Hesab yarat və ya daxil ol, Üzv girişi və qeydiyyatı, Hesaba asan giriş, Onlayn hesab idarəetməsi, Giriş və qeydiyyat portalı, Təhlükəsiz istifadəçi qoşulması",
            utilities: {
                create_account: "Hesab yarat",
                login: "Giriş",
                email_field: 'E-poçt',
                password_field: 'Şifrə',
            }
        },
        register: {
            title: "Qeydiyyat",
            description: "{brand}-ə xoş gəlmisiniz! Cəmi bir neçə sadə addımla hesab yaradaraq icmamıza qoşulun. Başlamaq üçün tam ad, e-poçt ünvanı və təhlükəsiz şifrə kimi əsas məlumatlarınızı təqdim edin",
            keywords: "Hesab yarat, İndi qeydiyyatdan keç, Pulsuz qeydiyyat, Platformamıza qoşul, Pulsuz qeydiyyatdan keç, Yeni istifadəçi qeydiyyatı, Təhlükəsiz hesab yaradılması, Asan qeydiyyat prosesi, Səyahətinə başla, Bu gün başla",
            utilities: {
                email_field: 'Sizin e-poçtunuz',
                password_field: 'Yeni şifrə',
                fullname_field: 'Tam ad',
                create_account: "Hesab yarat",
                already_have_account: "Artıq hesabınız var?",
            }
        }
    }
};
export default { ...locales };