import type { LanguageContent } from "~/constants/types/LocalesType";

let locales: LanguageContent;
locales = {
    lang: "Dil",
    note: "Qeyd",
    az: "Azərbaycan dili",
    en: "İngilis dili",
    ru: "Rus dili",
    email_confirming: "Email ünvanı təsdiqlənməsi",
    please_wait: "Zəhmət olmasa gözləyin...",
    redirecting_to_home: "Ana səhifəyə yönləndirilir",
    redirecting_to_login: "Daxil olma səhifəsinə yönləndirilir",
    error: 'Ups! Xəta baş verdi',
    greetings: '{brand}a xoş gəldiniz!',
    lets_get_started: "Başlayaq!",
    or: 'və ya',
    and: 'və',
    not_found: 'Tapılmadı!',
    not_found_description: 'Axtardığınız səhifə mövcud deyil və ya köçürülüb. URL-ni yoxlayın və yenidən cəhd edin.',
    continue_with: '{platform} ilə davam et',
    please_try_again_later: "Zəhmət olmasa daha sonra yenidən cəhd edin",
    service_temporarily_unavailable: "Xidmət müvəqqəti olaraq mövcud deyil",
    coming_soon: "Yaxında...",
    we_are_working_on_it: "Biz bunun üzərində çalışırıq!",
    done: 'Tamam!',
    back_to_home: "Ana səhifəyə qayıt",
    link_expired: "Linkin müddəti bitib!",
    link_expired_description: "Bu linkin müddəti başa çatıb və artıq etibarsızdır. Hadisə bitmiş ola bilər.",
    buttons: {
        search: "Axtar",
        filter: "Filtr",
        login: "Daxil ol",
        logout: "Çıxış et",
        continue: "Davam et",
        waiting: "Gözləyirəm",
        get_started: "Başla",
        save: "Yadda saxla",
        change: "Dəyişdir",
        cancel: "İmtina et"
    },
    backend_messages: {
        DONE: 'Tamam!',
        SOMETHING_WENT_WRONG: 'Bir şey səhv getdi!',
        EMAIL_IS_EXIST: 'Email artıq qeydiyyatdan keçib!',
        USER_REGISTRATION_FAILED: 'İstifadəçi qeydiyyatı uğursuz oldu!',
        USER_SUCCESSFULLY_REGISTERED: 'İstifadəçi uğurla qeydiyyatdan keçdi!',
        EMAIL_SUCCESSFULLY_CONFIRMED: "Email uğurla təsdiqləndi!",
        EMAIL_IS_NOT_VALID: 'Email etibarsızdır!',
        INVALID_EMAIL: 'Email etibarsızdır!',
        INVALID_PASSWORD: 'Şifrə etibarsızdır!',
        INVALID_FULLNAME: 'Tam ad etibarsızdır!',
        INVALID_TOKEN: 'Bir şey səhv getdi!',
        BCRYPT_ERROR: 'Bir şey səhv getdi!',
        USER_LOGIN_PROGRESS_FAILED: 'Daxil olma uğursuz oldu!',
        USER_SUCCESSFULLY_LOGIN: 'İstifadəçi uğurla daxil oldu!',
        EMAIL_IS_NOT_REGISTERED: 'Email qeydiyyatdan keçməyib!',
        EMAIL_OR_PASSWORD_INCORRECT: 'Email və ya şifrə yanlışdır!',
        LINK_EXPIRED: "Linkin müddəti bitib!",
        PASSWORD_SUCCESSFULLY_CHANGED: "Şifrə uğurla dəyişdirildi!",
        PASSWORD_RESET_LINK_WILL_SENT: "Əgər email ünvanınız sistemimizdə qeydiyyatdan keçibsə, biz link göndərəcəyik. Zəhmət olmasa poçt qutunuzu və spam qovluğunuzu yoxlayın.",
        USER_NOT_FOUND: 'İstifadəçi tapılmadı',
        AUTH_REQUIRED: 'Təsdiq tələb olunur',
        PARAM_REQUIRED: 'Parametr tələb olunur',
        OBJECT_NOT_FOUND: 'Obyekt tapılmadı',
        INVALID_PLACE_NAME: 'Yerləşmə adı etibarsızdır',
        INVALID_WEB_SITE_URL: 'Veb sayt URL etibarsızdır',
        INVALID_ZIP_CODE: 'Poçt kodu etibarsızdır',
        INVALID_ADDRESS: 'Ünvan etibarsızdır',
        INVALID_PLACE_TYPE: 'Yerləşmə tipi etibarsızdır',
        INVALID_CITY: 'Şəhər etibarsızdır',
        INVALID_STATE: 'Ştat etibarsızdır',
        INVALID_PHONE: 'Telefon etibarsızdır',
        INVALID_OPENING_HOURS: 'İş saatları etibarsızdır',
        ALREADY_EXIST: 'Artıq mövcuddur!',
        PLACE_NOT_FOUND: 'Yerləşmə tapılmadı',
        YOU_CANNOT_EDIT_PLACE_ID: 'Yerləşmə ID-sini redaktə edə bilməzsiniz',
        YOU_CANNOT_EDIT_BRAND_ID: 'Marka ID-sini redaktə edə bilməzsiniz',
        YOU_CANNOT_EDIT_OWNER_ID: 'Sahiblik ID-sini redaktə edə bilməzsiniz',
        BRAND_NOT_FOUND: 'Marka tapılmadı',
        BRAND_ALREADY_EXIST: 'Marka artıq mövcuddur',
        INVALID_BRAND_NAME: 'Marka adı etibarsızdır',
        INVALID_BRAND_BIO_SIZE: 'Marka bio ölçüsü etibarsızdır',
        NAME_ALREADY_TAKEN: 'Ad artıq götürülüb',
        INVALID_BIRTHDAY: 'Doğum tarixi etibarsızdır',
        OLD_PASSWORD_INCORRECT: 'Cari şifrə yanlışdır!',
        PASSWORDS_ARE_SAME: 'Yeni şifrə cari şifrə ilə eyni ola bilməz!',
        INVALID_BODY: 'Formada səhv məlumatlar var!',
        BIRTHDAY_ALREADY_EXIST: 'Doğum tarixi artıq təyin edilib!',
        INVALID_CONVERSATION_KEY: "Söhbət açar etibarsızdır!",
        MODEL_IS_UNDEFINED: "Model sahəsi tələb olunur!",
        MODEL_IS_UNSUPPORTED: "Dəstəklənməyən model!",
        KEY_NAME_IS_UNDEFINED: "Açar adı tələb olunur!",
        EMAIL_CONFIRM_REQUIRED: "Email təsdiqi tələb olunur. Zəhmət olmasa poçt qutunuzu yoxlayın!",
        NO_TOKEN: 'Token təqdim edilməyib!'
    },
    pages: {
        default: {
            title: "Səhifə",
            description: "Səhifə",
            keywords: "index"
        },
        home: {
            title: "Ana səhifə",
            description: "Ana səhifə",
            keywords: "Ana, Əsas, index"
        },
        getstarted: {
            title: "Başla",
            description: "Xoş gəldiniz {brand}!",
            keywords: "Başlama, Daxil ol, Çıxış et, Giriş, Çıxış, Qeydiyyat, İcazə",
            utilities: {
                create_account: "Hesab yaradın",
                login: "Daxil ol",
            }
        },
        login: {
            title: "Daxil ol",
            description: "Bizim təhlükəsiz daxil olma səhifəmizə xoş gəlmisiniz! Burada şəxsi hesabınıza daxil olmaq üçün məlumatlarınızı daxil edə bilərsiniz!",
            keywords: "İstifadəçi autentifikasiyası, Hesaba giriş, Təhlükəsiz daxil olma və qeydiyyat, Daxil ol və ya qeydiyyatdan keç, Hesab yaradın və ya daxil olun, Giriş və qeydiyyat, Hesaba asan daxil olmaq, Hesab idarəetməsi, Daxil olma portalı, Təhlükəsiz istifadəçi daxil olması",
            utilities: {
                create_account: "Hesab yaradın",
                login: "Daxil ol",
                login_title: "{brand}a daxil olun!",
                login_description: "Hesabınıza təhlükəsiz daxil olmaq üçün.",
                email_field: 'Email',
                password_field: 'Şifrə',
                forgot_password: "Şifrənizi unutdunuz?",
            }
        },
        forgot_password: {
            title: "Daxil ol",
            description: "Bizim təhlükəsiz daxil olma səhifəmizə xoş gəlmisiniz! Burada şəxsi hesabınıza daxil olmaq üçün məlumatlarınızı daxil edə bilərsiniz!",
            keywords: "İstifadəçi autentifikasiyası, Hesaba giriş, Təhlükəsiz daxil olma və qeydiyyat, Daxil ol və ya qeydiyyatdan keç, Hesab yaradın və ya daxil olun, Giriş və qeydiyyat, Hesaba asan daxil olmaq, Hesab idarəetməsi, Daxil olma portalı, Təhlükəsiz istifadəçi daxil olması",
            utilities: {
                back_to_login: "Daxil olma səhifəsinə qayıt",
                send_reset_link: "Şifrəni sıfırlamaq üçün link göndər",
                forgot_password_title: "Zəhmət olmasa emailinizi daxil edin!",
                forgot_password_description: "Şifrənizi sıfırlamaq üçün sizə bir link göndərəcəyik.",
                email_field: 'Sizin Email',
            }
        },
        reset_password: {
            title: "Daxil ol",
            description: "Bizim təhlükəsiz daxil olma səhifəmizə xoş gəlmisiniz! Burada şəxsi hesabınıza daxil olmaq üçün məlumatlarınızı daxil edə bilərsiniz!",
            keywords: "İstifadəçi autentifikasiyası, Hesaba giriş, Təhlükəsiz daxil olma və qeydiyyat, Daxil ol və ya qeydiyyatdan keç, Hesab yaradın və ya daxil olun, Giriş və qeydiyyat, Hesaba asan daxil olmaq, Hesab idarəetməsi, Daxil olma portalı, Təhlükəsiz istifadəçi daxil olması",
            utilities: {
                back_to_login: "Daxil olma səhifəsinə qayıt",
                send_reset_link: "Şifrəni sıfırlamaq üçün link göndər",
                reset_password_title: "Şifrənizi sıfırlayın!",
                reset_password_description: "Hesabınız üçün yeni şifrə yaradın.",
                new_password_field: 'Yeni şifrə',
                confirm_password_field: 'Şifrəni təsdiqləyin',
                save: 'Saxla',
                cancel: 'İmtina et',
            }
        },
        register: {
            title: "Qeydiyyat",
            description: "{brand}a xoş gəldiniz! Hesabınızı yaratmaq üçün sadəcə bir neçə addım atın. Adınızı, email ünvanınızı və güvənli şifrəni daxil edin və başlayın",
            keywords: "Hesab yaratmaq, İndi qeydiyyatdan keç, Pulsuz qeydiyyat, Platformamıza qoşulun, Pulsuz qeydiyyat, Yeni istifadəçi qeydiyyatı, Təhlükəsiz hesab yaradılması, Asan qeydiyyat prosesi, Səyahətinizə başlayın, Bu gün başlayın",
            utilities: {
                email_field: 'Sizin Email',
                password_field: 'Yeni şifrə',
                fullname_field: 'Tam ad',
                create_account: "Hesab yaradın",
                already_have_account: "Artıq hesabınız var?",
                i_accepted_the: "Mən qəbul etdim",
                terms_of_service: "Xidmət Şərtləri",
                privacy_policy: "Məxfilik Siyasəti",
                register_title: "{brand}a qeydiyyatdan keçin!",
                register_description: "Sadəcə bir neçə sadə addımda hesab yaradın.",
            }
        },
    },
    modals: {
        user_account: {
            label: 'İstifadəçi Hesabı'
        }
    }
};

export default {...locales};
