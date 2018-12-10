import {registerTable} from 'exceptional.js';

import {TABLE as DEFAULLT_TABLE} from './default';
import {TABLE as USERS_TABLE} from './users';
import {TABLE as DEBATES_TABLE} from './debate';
import {TABLE as STORAGE_TABLE} from './storage';

export function load () {
  registerTable(DEFAULLT_TABLE);
  registerTable(USERS_TABLE);
  registerTable(DEBATES_TABLE);
  registerTable(STORAGE_TABLE);
}
