import {IErrorTable} from 'exceptional.js';

import {DEFAULT_NAMESPACE} from '../namespaces';

export const TABLE: IErrorTable = {
  namespace: DEFAULT_NAMESPACE,
  locale: 'en',
  errors: {
    0: 'Something went wrong',
    1: 'This method was not found on API version ${apiVersion}.',
    2: 'Unkown API version',
    3: '${message}',
    4: 'You are not authorized to access this resource.',
    5: 'You have tried to do this too many times. Please try again in a minute.',
    6: '',
    7: '',
    8: '',
    9: ''
  }
};
