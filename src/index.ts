export {
  DEFAULT_NAMESPACE,
  USER_NAMESPACE,
  STORAGE_NAMESPACE,
  DEBATE_NAMESPACE
} from './locales/namespaces';

import {load as roLocale} from './locales/ro/index';
import {load as enLocale} from './locales/en/index';

// load locales
export function loadErrors () {
  roLocale();
  enLocale();
}
export default loadErrors;
