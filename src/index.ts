export const DEFAULT_NAMESPACE = 'default';
export const USER_NAMESPACE = 'users';
export const BUSINESS_NAMESPACE = 'business';
export const CALENDAR_NAMESPACE = 'calendar';
export const ASSETS_NAMESPACE = 'assets';
export const NOTIFICATIONS_NAMESPACE = 'notifications';
export const PAYMENTS_NAMESPACE = 'payments';
export const ADMIN_NAMESPACE = 'admin';
export const ANALYTICS_NAMESPACE = 'analytics';

import {load as roLocale} from './locales/ro/index';
import {load as enLocale} from './locales/en/index';

// load locales
export function loadNovabookerErrors () {
  roLocale();
  enLocale();
}
export default loadNovabookerErrors;
