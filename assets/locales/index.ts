import type { AvailableLocals } from "~/constants/types/LocalesType";
import en from "assets/locales/en";
import az from "assets/locales/az";
import ru from "assets/locales/ru";

export let availableLocales: AvailableLocals = [
    {
        messages: az,
        label: 'az',
        iso: 'az-AZ',
        icon: '/flags/az.svg'
    },
    {
        messages: en,
        label: 'en',
        iso: 'en-US',
        icon: '/flags/en.svg'
    },
    {
        messages: ru,
        label: 'ru',
        iso: 'ru-RU',
        icon: '/flags/ru.svg'
    },
];