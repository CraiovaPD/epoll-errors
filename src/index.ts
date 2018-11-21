export const DEFAULT_NAMESPACE = 'default';
export const USER_NAMESPACE = 'users';

import {load as roLocale} from './locales/ro/index';
import {load as enLocale} from './locales/en/index';

// load locales
export function loadErrors () {
  roLocale();
  enLocale();
}
export default loadErrors;
