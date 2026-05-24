import type { NextConfig } from "next";

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts' // Путь к твоему файлу конфигурации запросов
);

const nextConfig = {
  /* Твои остальные настройки Next.js (если есть) */
};

export default withNextIntl(nextConfig);
