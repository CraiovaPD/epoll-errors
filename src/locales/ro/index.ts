import {registerTable} from 'exceptional.js';

import {TABLE as DEFAULLT_TABLE} from './default';
import {TABLE as USERS_TABLE} from './users';

export function load () {
  registerTable(DEFAULLT_TABLE);
  registerTable(USERS_TABLE);
}
