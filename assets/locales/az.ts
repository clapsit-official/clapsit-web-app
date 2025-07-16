import type { LanguageContent } from "~/constants/types/LocalesType";

let locales: LanguageContent;
locales = {
    "lang": "Dil",
    "note": "Qeyd",
    "az": "Azərbaycanca",
    "en": "İngilis",
    "ru": "Rus",
    "email_confirming": "E-poçt ünvanının təsdiqlənməsi",
    "please_wait": "Xahiş edirik, gözləyin...",
    "loading": "Yüklənir",
    "redirecting_to_home": "Əsas səhifəyə yönləndirilir",
    "redirecting_to_login": "Giriş səhifəsinə yönləndirilir",
    "error": "Xəta baş verdi!",
    "greetings": "{brand}-ə xoş gəlmisiniz!",
    "lets_get_started": "Başlayaq!",
    "or": "və ya",
    "and": "və",
    "not_found": "Tapılmadı!",
    "not_found_description": "Axtardığınız səhifə mövcud deyil və ya köçürülüb. Zəhmət olmasa, URL-i yoxlayın və yenidən cəhd edin.",
    "continue_with": "{platform} ilə davam edin",
    "please_try_again_later": "Zəhmət olmasa, daha sonra yenidən cəhd edin",
    "service_temporarily_unavailable": "Xidmət müvəqqəti olaraq əlçatan deyil",
    "coming_soon": "Tezliklə gəlir...",
    "we_are_working_on_it": "Biz bunun üzərində işləyirik!",
    "done": "Tamamlandı!",
    "back_to_home": "Əsas səhifəyə qayıt",
    "link_expired": "Linkin vaxtı bitib!",
    "link_expired_description": "Bu linkin vaxtı bitib və artıq keçərli deyil. Tədbir bitmiş ola bilər.",
    "logout_prompt_question": "Çıxış etmək istədiyinizə əminsiniz?",
    "settings": "Tənzimləmələr",
    "say_hello_to": "Salam, {name}!",
    "main_description": "Clapsit-in AI JSON Generatoru ilə dərhal API-lər yaradın. Məlumatlarınızı təsvir edin və ya TypeScript JSON sxemindən istifadə edin və cəmi bir dəqiqədə sınaq məlumatları ilə tam funksional API əldə edin. Pulsuz, sürətli və tərtibatçı dostu — indi başlayın!",
    "search_for": "{value} üçün axtar...",
    "your_journey": "Səyahətiniz",
    "how_can_use_it": "Bunu necə istifadə etmək olar?",
    "session_expired": "Sessiyanızın vaxtı bitib!",
    "start_now": "İndi başla",
    "no_message": "Mesaj yoxdur",
    "not_supported_device": "Üzr istəyirik, bu məzmun hazırkı cihazınızda dəstəklənmir.",
    "no_options": "Seçimlər mövcud deyil",
    "select_an_option": "Seçim seçin",
    "recently": "Son zamanlar",
    "favorites": "Sevimlilər",
    "there_is_no_item_yet": "Hələ heç bir fəaliyyət yoxdur",
    "your_apis": "Yaradılmış API-lər",
    "collections": "Kolleksiyalar",
    "history": "Tarixçə",
    "theme": "Rəng modu",
    "buttons": {
        "search": "Axtar",
        "filter": "Filtr",
        "login": "Giriş",
        "logout": "Çıxış",
        "continue": "Davam et",
        "waiting": "Gözləyir",
        "get_started": "Başla",
        "save": "Saxla",
        "change": "Dəyiş",
        "cancel": "Ləğv et",
        "start": "Başla",
        "ok": "Tamam",
        "delete": "Sil",
        "pin": "Sabitlə",
        "add_to_favorites": "Sevimlilərə əlavə et",
        "remove_from_favorites": "Sevimlilərdən sil",
        "create_new": "Yenisini yarat",
        "learn_how": "Öyrən"
    },
    "backend_messages": {
        "DONE": "Uğurla tamamlandı.",
        "SOMETHING_WENT_WRONG": "Gözlənilməz xəta baş verdi.",
        "EMAIL_IS_EXIST": "Bu e-poçt artıq sistemimizdə mövcuddur.",
        "USER_REGISTRATION_FAILED": "İstifadəçi qeydiyyatı uğursuz oldu.",
        "USER_SUCCESSFULLY_REGISTERED": "İstifadəçi uğurla qeydiyyatdan keçdi.",
        "EMAIL_SUCCESSFULLY_CONFIRMED": "E-poçt uğurla təsdiqləndi.",
        "EMAIL_IS_NOT_VALID": "Təqdim olunan e-poçt keçərli deyil.",
        "INVALID_EMAIL": "E-poçt formatı yanlışdır.",
        "INVALID_PASSWORD": "Təhlükəsizlik üçün simvollar, rəqəmlər, kiçik və böyük hərflər daxil olan güclü parol istifadə edin.",
        "INVALID_FULLNAME": "Tam ad formatı yanlışdır.",
        "INVALID_BIRTHDAY": "Doğum tarixi formatı yanlışdır.",
        "INVALID_TOKEN": "Keçərsiz və ya vaxtı bitmiş token.",
        "BCRYPT_ERROR": "Parol şifrələnməsində xəta.",
        "USER_NOT_FOUND": "İstifadəçi sistemdə tapılmadı.",
        "USER_LOGIN_PROGRESS_FAILED": "Giriş prosesi uğursuz oldu.",
        "USER_SUCCESSFULLY_LOGIN": "İstifadəçi uğurla daxil oldu.",
        "EMAIL_IS_NOT_REGISTERED": "Bu e-poçt qeydiyyatdan keçməyib.",
        "EMAIL_OR_PASSWORD_INCORRECT": "E-poçt və ya parol yanlışdır.",
        "LINK_EXPIRED": "Təqdim etdiyiniz linkin vaxtı bitib.",
        "OLD_PASSWORD_INCORRECT": "Köhnə parol yanlışdır.",
        "PASSWORD_SUCCESSFULLY_CHANGED": "Parol uğurla dəyişdirildi.",
        "PASSWORD_RESET_LINK_WILL_SENT": "Parol sıfırlama linki e-poçtunuza göndəriləcək.",
        "PASSWORDS_ARE_SAME": "Yeni parol köhnə ilə eyni ola bilməz.",
        "INVALID_BODY": "Keçərsiz sorğu gövdəsi.",
        "BIRTHDAY_ALREADY_EXIST": "Bu doğum tarixi artıq qeydlərimizdə var.",
        "AUTH_REQUIRED": "Autentifikasiya tələb olunur.",
        "PARAM_REQUIRED": "Tələb olunan parametr əskikdir.",
        "VALUE_REQUIRED": "Tələb olunan dəyər əskikdir.",
        "OBJECT_NOT_FOUND": "Sorğulanmış obyekt tapılmadı.",
        "INVALID_PLACE_NAME": "Yer adı keçərsizdir.",
        "INVALID_WEB_SITE_URL": "Veb sayt URL-i keçərsizdir.",
        "INVALID_ZIP_CODE": "Poçt indeksi keçərsizdir.",
        "INVALID_ADDRESS": "Ünvan formatı keçərsizdir.",
        "INVALID_PLACE_TYPE": "Yer növü keçərsizdir.",
        "INVALID_CITY": "Şəhər adı keçərsizdir.",
        "INVALID_STATE": "Ştat adı keçərsizdir.",
        "INVALID_PHONE": "Telefon nömrəsi keçərsizdir.",
        "INVALID_OPENING_HOURS": "Açılış saatları formatı keçərsizdir.",
        "ALREADY_EXIST": "Bu element artıq mövcuddur.",
        "PLACE_NOT_FOUND": "Yer tapılmadı.",
        "YOU_CANNOT_EDIT_PLACE_ID": "Yer identifikatorunu redaktə edə bilməzsiniz.",
        "YOU_CANNOT_EDIT_BRAND_ID": "Brend identifikatorunu redaktə edə bilməzsiniz.",
        "YOU_CANNOT_EDIT_OWNER_ID": "Sahib identifikatorunu redaktə edə bilməzsiniz.",
        "KEY_NOT_FOUND": "Açar tapılmadı.",
        "BRAND_ALREADY_EXIST": "Bu brend artıq mövcuddur.",
        "INVALID_BRAND_NAME": "Brend adı keçərsizdir.",
        "INVALID_BRAND_BIO_SIZE": "Brend bio ölçüsü keçərsizdir.",
        "NAME_ALREADY_TAKEN": "Bu ad artıq alınmışdır.",
        "INVALID_CONVERSATION_KEY": "Söhbət açarı keçərsizdir.",
        "MODEL_IS_UNDEFINED": "Model müəyyən edilməyib.",
        "MODEL_IS_UNSUPPORTED": "Model dəstəklənmir.",
        "KEY_NAME_IS_UNDEFINED": "Açar adı müəyyən edilməyib.",
        "INVALID_KEY_NAME": "Keçərsiz açar adı.",
        "EMAIL_CONFIRM_REQUIRED": "E-poçt təsdiqlənməsi tələb olunur."
    },
    "pages": {
        "default": {
            "title": "Səhifə",
            "description": "Clapsit-in tərtibatçılar üçün innovativ alətlərini kəşf edin, iş axınınızı sadələşdirmək üçün nəzərdə tutulmuşdur.",
            "keywords": "Clapsit, tərtibatçı alətləri, JSON generator, API yaradılması, ön tərəf inkişafı"
        },
        "home": {
            "title": "Əsas səhifə",
            "description": "Clapsit-ə xoş gəlmisiniz, API-lər yaratmaq və JSON məlumatlarını asanlıqla generasiya etmək üçün platformanız.",
            "keywords": "Clapsit, JSON API generatoru, ön tərəf inkişafı, sınaq məlumatları, tərtibatçı alətləri",
            "utilities": {
                "main_search_placeholder": "Necə bir API istəyirsən? Qeyd et və başlayaq!",
            }
        },
        "getstarted": {
            "title": "Başla",
            "description": "Bu gün Clapsit-ə qoşulun! AI JSON Generatorumuzla bir neçə dəqiqədə API-lər yaratmağa başlayın.",
            "keywords": "Clapsit başla, qeydiyyat, hesab yaratma, JSON API, tərtibatçı inteqrasiyası",
            "utilities": {
                "create_account": "Hesab yarat",
                "login": "Giriş"
            }
        },
        "login": {
            "title": "Giriş",
            "description": "Clapsit hesabınıza təhlükəsiz daxil olaraq güclü API və JSON generasiya alətlərinə giriş əldə edin.",
            "keywords": "Clapsit giriş, istifadəçi autentifikasiyası, təhlükəsiz giriş, hesab girişi, tərtibatçı girişi",
            "utilities": {
                "create_account": "Hesab yarat",
                "login": "Giriş",
                "login_title": "{brand}-ə giriş!",
                "login_description": "Hesabınıza təhlükəsiz daxil olmaq üçün.",
                "email_field": "E-poçt",
                "password_field": "Parol",
                "forgot_password": "Parolu unutmusunuz?"
            }
        },
        "forgot_password": {
            "title": "Giriş",
            "description": "E-poçtunuza göndərilən təhlükəsiz sehrli linklə Clapsit parolunuzu asanlıqla sıfırlayın.",
            "keywords": "Clapsit parolu unutdum, parol sıfırlama, hesab bərpası, təhlükəsiz giriş, istifadəçi autentifikasiyası",
            "utilities": {
                "back_to_login": "Girişə qayıt",
                "send_reset_link": "Sıfırlama linki göndər",
                "forgot_password_title": "Zəhmət olmasa e-poçtunuzu daxil edin!",
                "forgot_password_description": "Parolunuzu sıfırlamaq üçün sehrli link göndərəcəyik.",
                "email_field": "Sizin e-poçt"
            }
        },
        "reset_password": {
            "title": "Giriş",
            "description": "Clapsit hesabınız üçün yeni parol yaradaraq tərtibatçı alətlərinə girişi bərpa edin.",
            "keywords": "Clapsit parol sıfırlama, parol bərpası, təhlükəsiz hesab, istifadəçi autentifikasiyası, tərtibatçı girişi",
            "utilities": {
                "back_to_login": "Girişə qayıt",
                "send_reset_link": "Sıfırlama linki göndər",
                "reset_password_title": "Parolunuzu sıfırlayın!",
                "reset_password_description": "Hesabınız üçün yeni parol yaradın.",
                "new_password_field": "Yeni parol",
                "confirm_password_field": "Parolu təsdiqlə",
                "save": "Saxla",
                "cancel": "Ləğv et"
            }
        },
        "register": {
            "title": "Qeydiyyat",
            "description": "Clapsit-ə qeydiyyatdan keçin və bir neçə addımda sınaq JSON məlumatları ilə API-lər yaratmağa başlayın.",
            "keywords": "Clapsit qeydiyyat, hesab yaratma, pulsuz qeydiyyat, JSON API generatoru",
            "utilities": {
                "email_field": "Sizin e-poçt",
                "password_field": "Yeni parol",
                "fullname_field": "Tam ad",
                "create_account": "Hesab yarat",
                "already_have_account": "Artıq hesabınız var?",
                "i_accepted_the": "Qəbul edirəm",
                "terms_of_service": "Xidmət Şərtləri",
                "privacy_policy": "Məxfilik Siyasəti",
                "register_title": "{brand}-də qeydiyyatdan keçin!",
                "register_description": "Bir neçə sadə addımda hesab yaradaraq bizə qoşulun."
            }
        },
        "json_generator": {
            "title": "AI-JSON Generator",
            "description": "Clapsit-in AI ilə işləyən JSON Generatoru ilə xüsusi JSON obyektləri və API-ləri dərhal yaradın.",
            "keywords": "Clapsit JSON generatoru, AI JSON yaradıcısı, sınaq məlumatları API-si, JSON sxemi, tərtibatçı alətləri"
        }
    },
    "modals": {
        "user_account": {
            "label": "Hesab"
        }
    },
    "assistants": {
        "json_generator": {
            "label": "AI-JSON Generator",
            "curl_label": "cURL Təfərrüatları:",
            "slogan": "JSON obyektlərini istədiyiniz kimi generasiya edin və dizayn edin!",
            "description": "AI ilə öz JSON məlumatlarınızı yarada və istədiyiniz kimi istifadə edə bilərsiniz. Bu, çevik və sürətli, sadə və istifadəsi asan bir alətdir.",
            "input": "Giriş",
            "input_placeholder": "Mesajınızı buraya əlavə edin",
            "output": "Çıxış",
            "output_placeholder": "Sorğunuz və JSON nümunələri ilə sol tərəfi doldurun",
            "generate": "Generasiya et",
            "copy": "Kopyala",
            "copied": "Kopyalandı",
            "get_curl": "cURL Təfərrüatlarını göstər",
            "clear": "Təmizlə",
            "loading": "Generasiya edilir...",
            "fetching": "Alınır...",
            "input_info": "TypeScript",
            "output_info": "JSON",
            "example_message": "Salam Clapsit! Yuxarıda təyin etdiyim məlumat strukturu əsasında mənim üçün JSON generasiya edə bilərsənmi?",
            "presets": {
                "how_to_prepare_cappuccino": "Kapuçino necə hazırlanır?",
                "random_country_data": "Random ölkələrin məlumatları",
                "planets_with_radius": "Planetlərin siyahısı",
                "random_users_list": "Random istifadəçilər siyahısı",
                "interesting_facts": "Maraqlı faktlar",
                "learning_new_words": "Yeni sözləri öyrənmək",
                "movie_suggestions": "Film önəriləri",
                "fitness_plan": "Fitnes plan",
                "most_streamed_spotify_songs": "Spotify-da ən çox yayımlananlar",
                "most_viewed_youtube_videos": "YouTube-da ən çox izlənmələr"
            }
        }
    }
}
export default { ...locales };
