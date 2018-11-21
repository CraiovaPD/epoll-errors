import {registerTable} from 'exceptional.js';

import {TABLE as DEFAULLT_TABLE} from './default';

export function load () {
  registerTable(DEFAULLT_TABLE);
}
