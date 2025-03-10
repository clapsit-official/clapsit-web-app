import type {LanguageContent} from "~/constants/types/LocalesType";

let locales: LanguageContent;
locales = {
    lang: "Язык",
    note: "Примечание",
    az: "Азербайджанский",
    en: "Английский",
    ru: "Русский",
    email_confirming: "Подтверждение адреса электронной почты",
    please_wait: "Пожалуйста, подождите",
    redirecting_to_home: "Перенаправление на главную страницу",
    redirecting_to_login: "Перенаправление на страницу входа",
    error: 'Ой! Произошла ошибка',
    greetings: 'Добро пожаловать в {brand}!',
    lets_get_started: "Давайте начнем!",
    or: 'или',
    continue_with: 'Продолжить с {platform}',
    please_try_again_later: "Пожалуйста, попробуйте снова позже",
    service_temporarily_unavailable: "Сервис временно недоступен",
    coming_soon: "Скоро будет...",
    we_are_working_on_it: "Мы работаем над этим!",
    buttons: {
        search: "Поиск",
        filter: "Фильтр",
        login: "Войти",
        logout: "Выйти",
        continue: "Продолжить",
        waiting: "Ожидание",
        get_started: "Начать",
        save: "Сохранить",
        change: "Изменить"
    },
    backend_messages: {
        DONE: 'Готово!',
        SOMETHING_WENT_WRONG: 'Что-то пошло не так!',
        EMAIL_IS_EXIST: 'Электронная почта уже зарегистрирована!',
        USER_REGISTRATION_FAILED: 'Регистрация пользователя не удалась!',
        USER_SUCCESSFULLY_REGISTERED: 'Пользователь успешно зарегистрирован!',
        EMAIL_SUCCESSFULLY_CONFIRMED: "Электронная почта успешно подтверждена!",
        EMAIL_IS_NOT_VALID: 'Электронная почта недействительна!',
        INVALID_EMAIL: 'Электронная почта недействительна!',
        INVALID_PASSWORD: 'Пароль недействителен!',
        INVALID_FULLNAME: 'Полное имя недействительно!',
        INVALID_TOKEN: 'Что-то пошло не так!',
        BCRYPT_ERROR: 'Что-то пошло не так!',
        USER_LOGIN_PROGRESS_FAILED: 'Процесс входа не удался!',
        USER_SUCCESSFULLY_LOGIN: 'Пользователь успешно вошел!',
        EMAIL_IS_NOT_REGISTERED: 'Электронная почта не зарегистрирована!',
        EMAIL_OR_PASSWORD_INCORRECT: 'Электронная почта или пароль неверны!',
        LINK_EXPIRED: "Срок действия ссылки истек!",
        PASSWORD_SUCCESSFULLY_CHANGED: "Пароль успешно изменен!",
        PASSWORD_RESET_LINK_WILL_SENT: "Если ваш адрес электронной почты зарегистрирован в нашей системе, мы отправим письмо с инструкциями по сбросу пароля. Пожалуйста, проверьте папку входящих и спам.",
        USER_NOT_FOUND: 'Пользователь не найден',
        AUTH_REQUIRED: 'Требуется авторизация',
        PARAM_REQUIRED: 'Требуется параметр',
        OBJECT_NOT_FOUND: 'Объект не найден',
        INVALID_PLACE_NAME: 'Недействительное название места',
        INVALID_WEB_SITE_URL: 'Недействительный URL веб-сайта',
        INVALID_ZIP_CODE: 'Недействительный почтовый индекс',
        INVALID_ADDRESS: 'Недействительный адрес',
        INVALID_PLACE_TYPE: 'Недействительный тип места',
        INVALID_CITY: 'Недействительный город',
        INVALID_STATE: 'Недействительный штат',
        INVALID_PHONE: 'Недействительный телефон',
        INVALID_OPENING_HOURS: 'Недействительные часы работы',
        ALREADY_EXIST: 'Уже существует!',
        PLACE_NOT_FOUND: 'Место не найдено',
        YOU_CANNOT_EDIT_PLACE_ID: 'Вы не можете редактировать place_id',
        YOU_CANNOT_EDIT_BRAND_ID: 'Вы не можете редактировать brand_id',
        YOU_CANNOT_EDIT_OWNER_ID: 'Вы не можете редактировать owner_id',
        BRAND_NOT_FOUND: 'Бренд не найден',
        BRAND_ALREADY_EXIST: 'Бренд уже существует',
        INVALID_BRAND_NAME: 'Недействительное название бренда',
        INVALID_BRAND_BIO_SIZE: 'Недействительный размер биографии бренда',
        NAME_ALREADY_TAKEN: 'Имя уже занято',
        INVALID_BIRTHDAY: 'Недействительная дата рождения',
        OLD_PASSWORD_INCORRECT: 'Текущий пароль неверен!',
        PASSWORDS_ARE_SAME: 'Новый пароль не может совпадать с текущим паролем!',
        INVALID_BODY: 'Недействительные поля формы!',
        BIRTHDAY_ALREADY_EXIST: 'Дата рождения уже установлена!',
        INVALID_CONVERSATION_KEY: "Недействительный ключ разговора!",
        MODEL_IS_UNDEFINED: "Поле модели обязательно!",
        MODEL_IS_UNSUPPORTED: "Модель не поддерживается!",
        KEY_NAME_IS_UNDEFINED: "Требуется название ключа!",
        EMAIL_CONFIRM_REQUIRED: "Требуется подтверждение электронной почты!"
    },
    pages: {
        default: {
            title: "Главная",
            description: "Главная страница",
            keywords: "Главная, Основная, индекс"
        },
        home: {
            title: "Главная",
            description: "Главная страница",
            keywords: "Главная, Основная, индекс"
        },
        getstarted: {
            title: "Начать",
            description: "Добро пожаловать в {brand}!",
            keywords: "Начать, Вход, Выход, Регистрация, Выход из системы, Создать аккаунт, Авторизация"
        },
        login: {
            title: "Вход",
            description: "Добро пожаловать на нашу защищенную страницу входа! Здесь вы можете получить доступ к своему персонализированному аккаунту, введя свои учетные данные!",
            keywords: "Аутентификация пользователя, Доступ к аккаунту, Безопасный вход и регистрация, Войти или зарегистрироваться, Создать или войти в аккаунт, Вход и регистрация для членов, Простой доступ к аккаунту, Онлайн-управление аккаунтом, Портал входа и регистрации, Безопасное подключение пользователя",
            utilities: {
                create_account: "Создать аккаунт",
                login: "Войти",
                email_field: 'Электронная почта',
                password_field: 'Пароль',
            }
        },
        register: {
            title: "Регистрация",
            description: "Добро пожаловать в {brand}! Присоединяйтесь к нашему сообществу, создав аккаунт всего за несколько простых шагов. Укажите свои основные данные, такие как полное имя, адрес электронной почты и надежный пароль, чтобы начать",
            keywords: "Создать аккаунт, Зарегистрироваться сейчас, Бесплатная регистрация, Присоединиться к нашей платформе, Зарегистрироваться бесплатно, Регистрация нового пользователя, Безопасное создание аккаунта, Простой процесс регистрации, Начните свое путешествие, Начните сегодня",
            utilities: {
                email_field: 'Ваша электронная почта',
                password_field: 'Новый пароль',
                fullname_field: 'Полное имя',
                create_account: "Создать аккаунт",
                already_have_account: "Уже есть аккаунт?",
            }
        }
    }
};
export default { ...locales };