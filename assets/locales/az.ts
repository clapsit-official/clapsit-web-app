import type { LanguageContent } from "~/constants/types/LocalesType";

let locales: LanguageContent;
locales = {
    "lang": "Dil",
    "note": "Qeyd",
    "az": "Azərbaycan dili",
    "en": "İngilis dili",
    "ru": "Rus dili",
    "email_confirming": "E-poçt ünvanını təsdiqləmək",
    "please_wait": "Xahiş edirik gözləyin...",
    "redirecting_to_home": "Əsas səhifəyə yönləndirilir",
    "redirecting_to_login": "Daxil olma səhifəsinə yönləndirilir",
    "error": "Ups! Xəta baş verdi",
    "greetings": "{brand}-ə xoş gəldiniz!",
    "lets_get_started": "Başlayaq!",
    "or": "və ya",
    "and": "və",
    "not_found": "Tapılmadı!",
    "not_found_description": "Axtardığınız səhifə mövcud deyil və ya köçürülüb. Xahiş edirik URL-i yoxlayın və yenidən cəhd edin.",
    "continue_with": "{platform} ilə davam et",
    "please_try_again_later": "Xahiş edirik, daha sonra yenidən cəhd edin",
    "service_temporarily_unavailable": "Xidmət müvəqqəti olaraq əlçatmazdır",
    "coming_soon": "Tezliklə...",
    "we_are_working_on_it": "Biz bunun üzərində işləyirik!",
    "done": "Hazırdır!",
    "back_to_home": "Əsas səhifəyə geri",
    "link_expired": "Link müddəti bitmişdir!",
    "link_expired_description": "Bu linkin müddəti bitmişdir və artıq etibarsızdır. Hadisə bitmiş ola bilər.",
    "logout_prompt_question": "Çıxmaq istədiyinizə əminsiniz?",
    "settings": "Ayarlar",
    "say_hello_to": "Salam, {name}!",
    "main_description": "Clapsit-in əlaqəli təlimatlar, əlavə bilgilər və bacarıqların hər hansı kombinasiyasını birləşdirən şəxsi versiyalarını kəşf edin və yaradın.",
    "search_for": "{value} axtar...",
    "your_journey": "Səyahətiniz",
    "how_can_use_it": "Onu necə istifadə edə bilərəm?",
    "session_expired": "Üzr istəyirik, seansınız bitdiyi üçün davam edə bilmərik!",
    "start_now": "İndi başla",
    "buttons": {
        "search": "Axtar",
        "filter": "Filtr",
        "login": "Daxil ol",
        "logout": "Çıxış",
        "continue": "Davam et",
        "waiting": "Gözləyir",
        "get_started": "Başla",
        "save": "Saxla",
        "change": "Dəyiş",
        "cancel": "Ləğv et",
        "start": "Başla",
        "ok": "Xeyr"
    },
    "backend_messages": {
        "DONE": "Hazırdır!",
        "SOMETHING_WENT_WRONG": "Bir şey səhv getdi!",
        "EMAIL_IS_EXIST": "E-poçt artıq qeydiyyatdan keçirilib!",
        "USER_REGISTRATION_FAILED": "İstifadəçi qeydiyyatı uğursuz oldu!",
        "USER_SUCCESSFULLY_REGISTERED": "İstifadəçi müvəffəqiyyətlə qeydiyyatdan keçdi!",
        "EMAIL_SUCCESSFULLY_CONFIRMED": "E-poçt müvəffəqiyyətlə təsdiqləndi!",
        "EMAIL_IS_NOT_VALID": "E-poçt etibarsızdır!",
        "INVALID_EMAIL": "E-poçt etibarsızdır!",
        "INVALID_PASSWORD": "Şifrə etibarsızdır!",
        "INVALID_FULLNAME": "Tam ad etibarsızdır!",
        "INVALID_TOKEN": "Bir şey səhv getdi!",
        "BCRYPT_ERROR": "Bir şey səhv getdi!",
        "USER_LOGIN_PROGRESS_FAILED": "Daxil olma prosesi uğursuz oldu!",
        "USER_SUCCESSFULLY_LOGIN": "İstifadəçi müvəffəqiyyətlə daxil oldu!",
        "EMAIL_IS_NOT_REGISTERED": "E-poçt qeydiyyatdan keçməyib!",
        "EMAIL_OR_PASSWORD_INCORRECT": "E-poçt və ya şifrə yanlışdır!",
        "LINK_EXPIRED": "Link müddəti bitmişdir!",
        "PASSWORD_SUCCESSFULLY_CHANGED": "Şifrə müvəffəqiyyətlə dəyişdirildi!",
        "PASSWORD_RESET_LINK_WILL_SENT": "Əgər e-poçt ünvanınız sistemdə qeydiyyatdan keçmişdirsə, biz e-poçt göndərəcəyik. Xahiş edirik, gələnlər və spam qovluğunuzu yoxlayın.",
        "USER_NOT_FOUND": "İstifadəçi tapılmadı",
        "AUTH_REQUIRED": "Avtorizasiya tələb olunur",
        "PARAM_REQUIRED": "Parametr tələb olunur",
        "OBJECT_NOT_FOUND": "Obyekt tapılmadı",
        "INVALID_PLACE_NAME": "Yerin adı etibarsızdır",
        "INVALID_WEB_SITE_URL": "Veb sayt URL-i etibarsızdır",
        "INVALID_ZIP_CODE": "Poçt kodu etibarsızdır",
        "INVALID_ADDRESS": "Ünvan etibarsızdır",
        "INVALID_PLACE_TYPE": "Yerin növü etibarsızdır",
        "INVALID_CITY": "Şəhər etibarsızdır",
        "INVALID_STATE": "Ştat etibarsızdır",
        "INVALID_PHONE": "Telefon nömrəsi etibarsızdır",
        "INVALID_OPENING_HOURS": "Açılış saatları etibarsızdır",
        "ALREADY_EXIST": "Artıq mövcuddur!",
        "PLACE_NOT_FOUND": "Yer tapılmadı",
        "YOU_CANNOT_EDIT_PLACE_ID": "Siz place_id dəyişə bilməzsiniz",
        "YOU_CANNOT_EDIT_BRAND_ID": "Siz brand_id dəyişə bilməzsiniz",
        "YOU_CANNOT_EDIT_OWNER_ID": "Siz owner_id dəyişə bilməzsiniz",
        "BRAND_NOT_FOUND": "Brend tapılmadı",
        "BRAND_ALREADY_EXIST": "Brend artıq mövcuddur",
        "INVALID_BRAND_NAME": "Brend adı etibarsızdır",
        "INVALID_BRAND_BIO_SIZE": "Brend bio ölçüsü etibarsızdır",
        "NAME_ALREADY_TAKEN": "Ad artıq tutulub",
        "INVALID_BIRTHDAY": "Doğum tarixi etibarsızdır",
        "OLD_PASSWORD_INCORRECT": "Hazırki şifrə yanlışdır!",
        "PASSWORDS_ARE_SAME": "Yeni şifrə hazırki şifrə ilə eyni ola bilməz!",
        "INVALID_BODY": "Form sahələri etibarsızdır!",
        "BIRTHDAY_ALREADY_EXIST": "Doğum tarixi artıq qeyd edilib!",
        "INVALID_CONVERSATION_KEY": "Məxfi məlumat açarı etibarsızdır!",
        "MODEL_IS_UNDEFINED": "Model sahəsi tələb olunur!",
        "MODEL_IS_UNSUPPORTED": "Dəstəklənməyən model!",
        "KEY_NAME_IS_UNDEFINED": "Açar adı tələb olunur!",
        "EMAIL_CONFIRM_REQUIRED": "E-poçt təsdiqi tələb olunur. Xahiş edirik, e-poçt qutunuzu yoxlayın!",
        "NO_TOKEN": "Token verilməyib!"
    },
    "pages": {
        "default": {
            "title": "Səhifə",
            "description": "Səhifə",
            "keywords": "indeks"
        },
        "home": {
            "title": "Əsas",
            "description": "Əsas səhifə",
            "keywords": "Əsas, Əsas, indeks"
        },
        "getstarted": {
            "title": "Başlayaq",
            "description": "{brand}-ə xoş gəldiniz!",
            "keywords": "Başlayaq, Daxil ol, Çıxış, Qeydiyyat, Çıxış, Qeydiyyat, Avtorizasiya",
            "utilities": {
                "create_account": "Hesab yarat",
                "login": "Daxil ol"
            }
        },
        "login": {
            "title": "Daxil ol",
            "description": "Əminlikli daxil olma səhifəmizə xoş gəldiniz! Burada, şəxsi hesabınıza daxil olmaq üçün məlumatlarınızı daxil edə bilərsiniz!",
            "keywords": "İstifadəçi avtorizasiyası, Hesab girişi, Əminlikli daxil olma və qeydiyyat, Daxil ol və ya qeydiyyatdan keç, Hesab yarat və ya daxil ol, Üzvlük daxil olma və qeydiyyat, Asan hesab girişi, Onlayn hesab idarə edilməsi, Daxil olma və qeydiyyat portalı, Əminlikli istifadəçi qəbulu",
            "utilities": {
                "create_account": "Hesab yarat",
                "login": "Daxil ol",
                "login_title": "{brand}-ə daxil ol!",
                "login_description": "Hesabınıza əminlikli daxil olmaq üçün.",
                "email_field": "E-poçt",
                "password_field": "Şifrə",
                "forgot_password": "Şifrəni unutdunuz?"
            }
        },
        "forgot_password": {
            "title": "Daxil ol",
            "description": "Əminlikli daxil olma səhifəmizə xoş gəldiniz! Burada, şəxsi hesabınıza daxil olmaq üçün məlumatlarınızı daxil edə bilərsiniz!",
            "keywords": "İstifadəçi avtorizasiyası, Hesab girişi, Əminlikli daxil olma və qeydiyyat, Daxil ol və ya qeydiyyatdan keç, Hesab yarat və ya daxil ol, Üzvlük daxil olma və qeydiyyat, Asan hesab girişi, Onlayn hesab idarə edilməsi, Daxil olma və qeydiyyat portalı, Əminlikli istifadəçi qəbulu",
            "utilities": {
                "back_to_login": "Daxil olma səhifəsinə geri",
                "send_reset_link": "Sıfırlama linki göndər",
                "forgot_password_title": "Xahiş edirik, e-poçtunuzu daxil edin!",
                "forgot_password_description": "Şifrənizi sıfırlamaq üçün sihirli bir link göndərəcəyik.",
                "email_field": "Sizin e-poçtunuz"
            }
        },
        "reset_password": {
            "title": "Daxil ol",
            "description": "Əminlikli daxil olma səhifəmizə xoş gəldiniz! Burada, şəxsi hesabınıza daxil olmaq üçün məlumatlarınızı daxil edə bilərsiniz!",
            "keywords": "İstifadəçi avtorizasiyası, Hesab girişi, Əminlikli daxil olma və qeydiyyat, Daxil ol və ya qeydiyyatdan keç, Hesab yarat və ya daxil ol, Üzvlük daxil olma və qeydiyyat, Asan hesab girişi, Onlayn hesab idarə edilməsi, Daxil olma və qeydiyyat portalı, Əminlikli istifadəçi qəbulu",
            "utilities": {
                "back_to_login": "Daxil olma səhifəsinə geri",
                "send_reset_link": "Sıfırlama linki göndər",
                "reset_password_title": "Şifrənizi sıfırlayın!",
                "reset_password_description": "Hesabınız üçün yeni bir şifrə yaradın.",
                "new_password_field": "Yeni şifrə",
                "confirm_password_field": "Şifrəni təsdiqləyin",
                "save": "Saxla",
                "cancel": "Ləğv et"
            }
        },
        "register": {
            "title": "Qeydiyyat",
            "description": "{brand}-ə xoş gəldiniz! Cəmi bir neçə sadə addımla cəmiyyətimizə qoşulun. Başlamaq üçün tam adınızı, e-poçt ünvanınızı və əminlikli bir şifrə daxil edin",
            "keywords": "Hesab yarat, İndi qeydiyyatdan keç, Pulsuz qeydiyyat, Platformamıza qoşul, Pulsuz qeydiyyat, Yeni istifadəçi qeydiyyatı, Əminlikli hesab yaradılması, Asan qeydiyyat prosesi, Səyahətinizi başlayın, Bugün başlayın",
            "utilities": {
                "email_field": "Sizin e-poçtunuz",
                "password_field": "Yeni şifrə",
                "fullname_field": "Tam ad",
                "create_account": "Hesab yarat",
                "already_have_account": "Hesabınız var?",
                "i_accepted_the": "Mən qəbul edirəm",
                "terms_of_service": "İstifadə şərtləri",
                "privacy_policy": "Məxfilik siyasəti",
                "register_title": "{brand}-ə qeydiyyatdan keçin!",
                "register_description": "Bir neçə sadə addımla bizə qoşulun."
            }
        }
    },
    "modals": {
        "user_account": {
            "label": "İstifadəçi Hesabı"
        }
    },
    "assistants": {
        "json_generator": {
            "label": "AI-JSON Generator",
            "slogan": "JSON obyektlərini istədiyiniz kimi yaradın və dizayn edin!",
            "description": "JSON obyektlərini istədiyiniz kimi yaradın və dizayn edin. JSON obyektlərini istədiyiniz kimi yaradın və dizayn edin. JSON obyektlərini istədiyiniz kimi yaradın və dizayn edin!"
        }
    }
}
export default {...locales};
