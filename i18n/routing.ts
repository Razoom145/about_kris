import { defineRouting } from 'next-intl/routing';


// 1. Определяем правила роутинга
export const routing = defineRouting({
    locales: ['en', 'ru'],    // Поддерживаемые языки
    defaultLocale: 'en',      // Язык по умолчанию
    localePrefix: 'always'    // Всегда добавлять /ru или /en в адресную строку
});
