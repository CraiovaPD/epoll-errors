import {IErrorTable} from 'exceptional.js';
import {DEBATE_NAMESPACE} from '../namespaces';

export const TABLE: IErrorTable = {
  namespace: DEBATE_NAMESPACE,
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
    10: 'Nu am gasit nicio dezbatere cu acest id ${debateId}.',
    11: 'Nu poti vota de mai multe ori la acelasi subiect.',
    12: 'Optiunea aleasa pentru vot nu exista.',
    13: 'Aceasta dezbatere nu poate fi pusa iar in draft.',
    14: '',
    15: ''
  }
};
