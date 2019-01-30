import {IErrorTable} from 'exceptional.js';

import {USER_NAMESPACE} from '../namespaces';

export const TABLE: IErrorTable = {
  namespace: USER_NAMESPACE,
  locale: 'ro',
  errors: {
    0: 'S-a intamplat ceva neprevazut',
    1: 'Aceasta metoda a API-ului ${apiVersion} nu a fost gasita.',
    2: 'Unkown API version',
    3: '${message}',
    4: 'Nu esti autorizat sa accesezi aceasta resursa.',
    5: 'Ai incercat sa accesezi aceasta metoda de prea multe ori. Incearca din nou peste un minut.',
    6: '',
    7: '',
    8: '',
    9: '',
    10: 'Nu exista niciun utilizator inregistrat cu acest numar de telefon ${phone}.',
    11: 'Nu exista niciun utilizator cu acest id ${id}.'
  }
};
