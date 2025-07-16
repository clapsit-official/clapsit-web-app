import type { LanguageContent } from "~/constants/types/LocalesType";
let locales: LanguageContent;
locales = {
    "lang": "Язык",
    "note": "Примечание",
    "az": "Азербайджанский",
    "en": "Английский",
    "ru": "Русский",
    "email_confirming": "Подтверждение адреса электронной почты",
    "please_wait": "Пожалуйста, подождите...",
    "loading": "Загрузка",
    "redirecting_to_home": "Перенаправление на главную страницу",
    "redirecting_to_login": "Перенаправление на страницу входа",
    "error": "Ой! Произошла ошибка",
    "greetings": "Добро пожаловать в {brand}!",
    "lets_get_started": "Давай начнем!",
    "or": "или",
    "and": "и",
    "not_found": "Не найдено!",
    "not_found_description": "Страница, которую вы ищете, не существует или была перемещена. Пожалуйста, проверьте URL и попробуйте снова.",
    "continue_with": "Продолжить с {platform}",
    "please_try_again_later": "Пожалуйста, попробуйте снова позже",
    "service_temporarily_unavailable": "Сервис временно недоступен",
    "coming_soon": "Скоро будет...",
    "we_are_working_on_it": "Мы работаем над этим!",
    "done": "Готово!",
    "back_to_home": "Вернуться на главную",
    "link_expired": "Ссылка истекла!",
    "link_expired_description": "Эта ссылка истекла и больше недействительна. Событие могло закончиться.",
    "logout_prompt_question": "Вы уверены, что хотите выйти?",
    "settings": "Настройки",
    "say_hello_to": "Привет, {name}!",
    "main_description": "Мгновенно создавайте API с помощью AI JSON Generator от Clapsit. Опишите свои данные или используйте схему JSON TypeScript и получите полностью функциональный API с тестовыми данными за одну минуту. Бесплатно, быстро и удобно для разработчиков — начните сейчас!",
    "search_for": "Поиск {value}...",
    "your_journey": "Ваше путешествие",
    "how_can_use_it": "Как это использовать?",
    "session_expired": "Ваша сессия истекла!",
    "start_now": "Начать сейчас",
    "no_message": "Сообщений нет",
    "not_supported_device": "К сожалению, этот контент не поддерживается на вашем текущем устройстве.",
    "no_options": "Нет доступных опций",
    "select_an_option": "Выберите опцию",
    "recently": "Недавно",
    "favorites": "Избранное",
    "there_is_no_item_yet": "Пока нет действий",
    "your_apis": "Созданные API",
    "collections": "Коллекции",
    "history": "История",
    "theme": "Тема",
    "buttons": {
        "search": "Поиск",
        "filter": "Фильтр",
        "login": "Вход",
        "logout": "Выйти",
        "continue": "Продолжить",
        "waiting": "Ожидание",
        "get_started": "Начать",
        "save": "Сохранить",
        "change": "Изменить",
        "cancel": "Отмена",
        "start": "Старт",
        "ok": "ОК",
        "delete": "Удалить",
        "pin": "Закрепить",
        "add_to_favorites": "Добавить в избранное",
        "remove_from_favorites": "Удалить из избранного",
        "create_new": "Создать новый",
        "learn_how": "Узнать как"
    },
    "backend_messages": {
        "DONE": "Успешно завершено.",
        "SOMETHING_WENT_WRONG": "Произошла непредвиденная ошибка.",
        "EMAIL_IS_EXIST": "Этот адрес электронной почты уже существует в нашей системе.",
        "USER_REGISTRATION_FAILED": "Процесс регистрации пользователя не удался.",
        "USER_SUCCESSFULLY_REGISTERED": "Пользователь успешно зарегистрирован.",
        "EMAIL_SUCCESSFULLY_CONFIRMED": "Электронная почта успешно подтверждена.",
        "EMAIL_IS_NOT_VALID": "Указанный адрес электронной почты недействителен.",
        "INVALID_EMAIL": "Недопустимый формат электронной почты.",
        "INVALID_PASSWORD": "Пожалуйста, используйте надежный пароль, включающий символы, цифры, строчные и заглавные буквы для большей безопасности.",
        "INVALID_FULLNAME": "Недопустимый формат полного имени.",
        "INVALID_BIRTHDAY": "Недопустимый формат даты рождения.",
        "INVALID_TOKEN": "Недействительный или истекший токен.",
        "BCRYPT_ERROR": "Ошибка при хешировании пароля.",
        "USER_NOT_FOUND": "Пользователь не найден в системе.",
        "USER_LOGIN_PROGRESS_FAILED": "Процесс входа не удался.",
        "USER_SUCCESSFULLY_LOGIN": "Пользователь успешно вошел в систему.",
        "EMAIL_IS_NOT_REGISTERED": "Этот адрес электронной почты не зарегистрирован.",
        "EMAIL_OR_PASSWORD_INCORRECT": "Неверный адрес электронной почты или пароль.",
        "LINK_EXPIRED": "Указанная ссылка истекла.",
        "OLD_PASSWORD_INCORRECT": "Старый пароль неверный.",
        "PASSWORD_SUCCESSFULLY_CHANGED": "Пароль успешно изменен.",
        "PASSWORD_RESET_LINK_WILL_SENT": "Ссылка для сброса пароля будет отправлена на вашу электронную почту.",
        "PASSWORDS_ARE_SAME": "Новый пароль не может совпадать со старым.",
        "INVALID_BODY": "Недопустимое тело запроса.",
        "BIRTHDAY_ALREADY_EXIST": "Эта дата рождения уже есть в наших записях.",
        "AUTH_REQUIRED": "Требуется аутентификация.",
        "PARAM_REQUIRED": "Отсутствует обязательный параметр.",
        "VALUE_REQUIRED": "Отсутствует обязательное значение.",
        "OBJECT_NOT_FOUND": "Запрашиваемый объект не найден.",
        "INVALID_PLACE_NAME": "Недопустимое название места.",
        "INVALID_WEB_SITE_URL": "Недопустимый URL веб-сайта.",
        "INVALID_ZIP_CODE": "Недопустимый почтовый индекс.",
        "INVALID_ADDRESS": "Недопустимый формат адреса.",
        "INVALID_PLACE_TYPE": "Недопустимый тип места.",
        "INVALID_CITY": "Недопустимое название города.",
        "INVALID_STATE": "Недопустимое название штата.",
        "INVALID_PHONE": "Недопустимый номер телефона.",
        "INVALID_OPENING_HOURS": "Недопустимый формат часов работы.",
        "ALREADY_EXIST": "Этот элемент уже существует.",
        "PLACE_NOT_FOUND": "Место не найдено.",
        "YOU_CANNOT_EDIT_PLACE_ID": "Вы не можете редактировать идентификатор места.",
        "YOU_CANNOT_EDIT_BRAND_ID": "Вы не можете редактировать идентификатор бренда.",
        "YOU_CANNOT_EDIT_OWNER_ID": "Вы не можете редактировать идентификатор владельца.",
        "KEY_NOT_FOUND": "Ключ не найден.",
        "BRAND_ALREADY_EXIST": "Этот бренд уже существует.",
        "INVALID_BRAND_NAME": "Недопустимое название бренда.",
        "INVALID_BRAND_BIO_SIZE": "Недопустимый размер биографии бренда.",
        "NAME_ALREADY_TAKEN": "Это имя уже занято.",
        "INVALID_CONVERSATION_KEY": "Недопустимый ключ разговора.",
        "MODEL_IS_UNDEFINED": "Модель не определена.",
        "MODEL_IS_UNSUPPORTED": "Модель не поддерживается.",
        "KEY_NAME_IS_UNDEFINED": "Название ключа не определено.",
        "INVALID_KEY_NAME": "Недопустимое название ключа.",
        "EMAIL_CONFIRM_REQUIRED": "Требуется подтверждение электронной почты."
    },
    "pages": {
        "default": {
            "title": "Страница",
            "description": "Исследуйте инновационные инструменты Clapsit для разработчиков, созданные для упрощения вашей работы.",
            "keywords": "Clapsit, инструменты для разработчиков, генератор JSON, создание API, разработка фронтенда"
        },
        "home": {
            "title": "Главная",
            "description": "Добро пожаловать в Clapsit, вашу платформу для легкого создания API и генерации JSON-данных.",
            "keywords": "Clapsit, генератор JSON API, разработка фронтенда, тестовые данные, инструменты для разработчиков",
            "utilities": {
                "main_search_placeholder": "Давай начнем создавать потрясающие API!",
            }
        },
        "getstarted": {
            "title": "Начать",
            "description": "Присоединяйтесь к Clapsit сегодня! Начните создавать API с помощью нашего AI JSON Generator за считанные минуты.",
            "keywords": "Clapsit начать, регистрация, создание аккаунта, JSON API, интеграция разработчиков",
            "utilities": {
                "create_account": "Создать аккаунт",
                "login": "Вход"
            }
        },
        "login": {
            "title": "Вход",
            "description": "Безопасно войдите в свой аккаунт Clapsit, чтобы получить доступ к мощным инструментам для создания API и JSON.",
            "keywords": "Clapsit вход, аутентификация пользователя, безопасный вход, доступ к аккаунту, вход для разработчиков",
            "utilities": {
                "create_account": "Создать аккаунт",
                "login": "Вход",
                "login_title": "Вход в {brand}!",
                "login_description": "Для безопасного доступа к вашему аккаунту.",
                "email_field": "Электронная почта",
                "password_field": "Пароль",
                "forgot_password": "Забыли пароль?"
            }
        },
        "forgot_password": {
            "title": "Вход",
            "description": "Сбросьте пароль Clapsit легко с помощью безопасной магической ссылки, отправленной на вашу электронную почту.",
            "keywords": "Clapsit забыли пароль, сброс пароля, восстановление аккаунта, безопасный вход, аутентификация пользователя",
            "utilities": {
                "back_to_login": "Вернуться к входу",
                "send_reset_link": "Отправить ссылку для сброса",
                "forgot_password_title": "Пожалуйста, введите ваш email!",
                "forgot_password_description": "Мы отправим вам магическую ссылку для сброса пароля.",
                "email_field": "Ваш email"
            }
        },
        "reset_password": {
            "title": "Вход",
            "description": "Создайте новый пароль для вашего аккаунта Clapsit, чтобы восстановить доступ к инструментам разработчика.",
            "keywords": "Clapsit сброс пароля, восстановление пароля, безопасный аккаунт, аутентификация пользователя, вход для разработчиков",
            "utilities": {
                "back_to_login": "Вернуться к входу",
                "send_reset_link": "Отправить ссылку для сброса",
                "reset_password_title": "Сбросьте ваш пароль!",
                "reset_password_description": "Создайте новый пароль для вашего аккаунта.",
                "new_password_field": "Новый пароль",
                "confirm_password_field": "Подтвердите пароль",
                "save": "Сохранить",
                "cancel": "Отмена"
            }
        },
        "register": {
            "title": "Регистрация",
            "description": "Зарегистрируйтесь в Clapsit и начните создавать API с тестовыми JSON-данными за несколько шагов.",
            "keywords": "Clapsit регистрация, создание аккаунта, бесплатная регистрация, генератор JSON API",
            "utilities": {
                "email_field": "Ваш email",
                "password_field": "Новый пароль",
                "fullname_field": "Полное имя",
                "create_account": "Создать аккаунт",
                "already_have_account": "Уже есть аккаунт?",
                "i_accepted_the": "Я принимаю",
                "terms_of_service": "Условия использования",
                "privacy_policy": "Политика конфиденциальности",
                "register_title": "Зарегистрируйтесь в {brand}!",
                "register_description": "Присоединяйтесь к нам, создав аккаунт за несколько простых шагов."
            }
        },
        "json_generator": {
            "title": "AI-JSON Генератор",
            "description": "Создавайте пользовательские JSON-объекты и API мгновенно с помощью AI-генератора JSON от Clapsit.",
            "keywords": "Clapsit JSON генератор, AI JSON создатель, API с тестовыми данными, JSON схема, инструменты для разработчиков"
        }
    },
    "modals": {
        "user_account": {
            "label": "Аккаунт"
        }
    },
    "assistants": {
        "json_generator": {
            "label": "AI-JSON Генератор",
            "curl_label": "Детали cURL:",
            "slogan": "Генерируйте и проектируйте JSON-объекты так, как хотите!",
            "description": "С помощью ИИ вы можете создавать свои собственные JSON-данные и использовать их по своему усмотрению. Это гибкий и быстрый инструмент, простой и удобный в использовании.",
            "input": "Ввод",
            "input_placeholder": "Добавьте ваше сообщение здесь",
            "output": "Вывод",
            "output_placeholder": "Заполните левую сторону вашим запросом и примерами JSON",
            "generate": "Сгенерировать",
            "copy": "Копировать",
            "copied": "Скопировано",
            "get_curl": "Показать детали cURL",
            "clear": "Очистить",
            "loading": "Генерация...",
            "fetching": "Получение...",
            "input_info": "TypeScript",
            "output_info": "JSON",
            "example_message": "Привет, Clapsit! На основе структуры данных, которую я определил ранее, не могли бы вы сгенерировать для меня JSON?",
            "presets": {
                "how_to_prepare_cappuccino": "Как приготовить капучино?",
                "random_country_data": "Данные о случайных странах",
                "planets_with_radius": "Планеты с радиусом",
                "random_users_list": "Список случайных пользователей",
                "interesting_facts": "Интересные факты",
                "learning_new_words": "Изучение новых слов",
                "movie_suggestions": "Предложения фильмов",
                "fitness_plan": "Фитнес-план",
                "most_streamed_spotify_songs": "Самый прослушиваемый на Spotify",
                "most_viewed_youtube_videos": "Самые просматриваемые на YouTube"

            }
        }
    }
}
export default { ...locales };
